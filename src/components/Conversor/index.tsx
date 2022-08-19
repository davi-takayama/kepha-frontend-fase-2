import style from "./Conversor.module.scss";
import classNames from "classnames";
import { Box, Button, TextField } from "@mui/material";
import SeletorConverterDe from "./SeletorConverterDe";
import React from "react";
import SeletorConverterPara from "./SeletorConverterPara";
import { useRecoilValue } from "recoil";
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

/*
    a fazer:
    * componentizar seletores, com o onChange, label, elementos, etc
    * componentizar as tabelas em um unico elemento
*/

const Conversor = () => {

    const converterDeState = useRecoilValue(converterDe);
    const [entrada, setEntrada] = React.useState("");
    const converter = (valor: number) => FConverter(valor);
    const converterParaState = useRecoilValue(converterPara);
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

        const item: IHistoricoItem = {
            id: FSetId(),
            unidade_a_converter: encontrarSimbolo(converterDeState),
            unidade_convertida: encontrarSimbolo(converterParaState),
            valor_a_converter: +(+entrada).toFixed(2),
            valor_convertido: +(+valorConvertido).toFixed(2)
        };
        console.log(item);
        adicionarItem(item);
    };

    return (
        <Box
            className={classNames({
                [style.corpo]: true,
            })}
            component="form"
            noValidate
            autoComplete="off"
        >
            <SeletorConverterDe />

            <TextField label="valor a converter" variant="filled" type={"number"}
                id="entrada"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
            />

            <SeletorConverterPara opcoes={opcoes} />

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