import style from "./Conversor.module.scss";
import classNames from "classnames";
import { Box, Button, Paper, SelectChangeEvent, TextField } from "@mui/material";
import ScaleIcon from "@mui/icons-material/Scale";
import ScienceIcon from "@mui/icons-material/Science";
import StraightenIcon from "@mui/icons-material/Straighten";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { converterPara, converterDe } from "util/states/atom";
import { massas, quilo } from "util/valores/massa";
import { litro, volumes } from "util/valores/volume";
import { comprimentos, metro } from "util/valores/comprimento";
import { celsius, temperaturas } from "util/valores/temperatura";
import { FConverter } from "util/funcoes/FConverter";
import { IHistoricoItem } from "util/interfaces/IHistoricoItem";
import useAdicionaItem from "util/hooks/useAdicionaItem";
import { FSetId } from "util/funcoes/FSetId";
import FEncontrarSimbolo from "util/funcoes/FEncontrarSimbolo";
import Seletor from "./Seletor";

const Conversor = () => {

    const converterDeState = useRecoilValue(converterDe);
    const setConverterDe = useSetRecoilState(converterDe);
    const converterParaState = useRecoilValue(converterPara);
    const setConverterPara = useSetRecoilState(converterPara);
    const [entrada, setEntrada] = React.useState("");
    const [saida, setSaida] = React.useState("");
    const [unidadeSaida, setUnidadeSaida] = React.useState("");
    const converter = (valor: number) => FConverter(valor);
    const valorConvertido = converter(+entrada);
    const adicionarItem = useAdicionaItem();
    const encontrarSimbolo = FEncontrarSimbolo();

    let opcoes: string[];
    switch (converterDeState) {
    case litro.nome:
        opcoes = volumes.map(item => item.nome).filter(item => item !== litro.nome);
        break;
    case metro.nome:
        opcoes = comprimentos.map(item => item.nome).filter(item => item !== metro.nome);
        break;
    case quilo.nome:
        opcoes = massas.map(item => item.nome).filter(item => item !== quilo.nome);
        break;
    case celsius.nome:
        opcoes = temperaturas.map(item => item.nome).filter(item => item !== celsius.nome);
        break;
    default:
        opcoes = volumes.map(item => item.nome).filter(item => item !== litro.nome);
    }

    const enviarAoHistorico = () => {
        if (converterDeState !== celsius.nome && +entrada < 0) {
            alert("o valor não pode ser negativo");
        } else {

            const item: IHistoricoItem = {
                id: FSetId(),
                unidade_a_converter: encontrarSimbolo(converterDeState),
                unidade_convertida: encontrarSimbolo(converterParaState),
                valor_a_converter: +(+entrada).toFixed(2),
                valor_convertido: +(+valorConvertido).toFixed(2)
            };
            adicionarItem(item);
            setSaida(valorConvertido.toFixed(2));
            setUnidadeSaida(encontrarSimbolo(converterParaState));
        }
    };

    const handleChangeDe = (event: SelectChangeEvent) => {
        setConverterDe(event.target.value);
    };

    const handleChangePara = (e: SelectChangeEvent<string>) => {
        setConverterPara(e.target.value);
    };

    useEffect(() => {
        setEntrada("0");
        setConverterPara(opcoes[0]);
        setSaida("");
        setUnidadeSaida("");
    }, [converterDeState]);

    return (
        <Box
            className={classNames({
                [style.corpo]: true,
            })}
            component={Paper}
        >
            <Seletor
                label={"converter de"}
                id={"converterDe"}
                itens={
                    [
                        { Nome: litro.nome, Icone: <ScienceIcon /> },
                        { Nome: metro.nome, Icone: <StraightenIcon /> },
                        { Nome: quilo.nome, Icone: <ScaleIcon /> },
                        { Nome: celsius.nome, Icone: <ThermostatIcon /> },
                    ]}
                onChange={handleChangeDe}
                value={converterDeState}
            />

            <TextField label="valor a converter" variant="filled" type={"number"}
                id="entrada"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
            />

            <Seletor
                label={"converter para"}
                id={"converter_para"}
                itens={opcoes.map((item) => { return { Nome: item }; })}
                onChange={handleChangePara}
                value={converterParaState}
            />

            <p>
                conversao: {saida} {unidadeSaida}
            </p>

            <Button
                variant="contained"
                size="large"
                onClick={enviarAoHistorico}
            >
                Converter
            </Button>
        </Box>
    );
};

export default Conversor;