import style from "./Conversor.module.scss";
import tema from "styles/temaGamer.module.scss";
import { Box, Button, Paper, SelectChangeEvent, TextField } from "@mui/material";
import ScaleIcon from "@mui/icons-material/Scale";
import ScienceIcon from "@mui/icons-material/Science";
import StraightenIcon from "@mui/icons-material/Straighten";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { converterDe, converterPara, gamer } from "util/states/atom";
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
import classNames from "classnames";

const Conversor = () => {

    const gamerState = useRecoilValue(gamer);
    const converterDeState = useRecoilValue(converterDe);
    const setConverterDe = useSetRecoilState(converterDe);
    const converterParaState = useRecoilValue(converterPara);
    const setConverterPara = useSetRecoilState(converterPara);
    const [entrada, setEntrada] = React.useState("");
    const [saida, setSaida] = React.useState("");
    const [unidadeSaida, setUnidadeSaida] = React.useState("");
    const [desabilitado, setDesabilitado] = React.useState(true);
    const converter = (valor: number) => FConverter(valor);
    const valorConvertido = converter(+entrada);
    const adicionarItem = useAdicionaItem();
    const encontrarSimbolo = FEncontrarSimbolo();
    let opcoesMedidas: string[];
    const padrao = "selecionar";

    // muda as opceos de acordo com o valor selecionado 
    // faz um map para pegar o nome das unidades de medida da categoria
    // com excessao de quilo, litro, metro e celsius
    switch (converterDeState) {
    case litro.nome:
        opcoesMedidas = volumes.map(item => item.nome).filter(item => item !== litro.nome);
        break;
    case metro.nome:
        opcoesMedidas = comprimentos.map(item => item.nome).filter(item => item !== metro.nome);
        break;
    case quilo.nome:
        opcoesMedidas = massas.map(item => item.nome).filter(item => item !== quilo.nome);
        break;
    case celsius.nome:
        opcoesMedidas = temperaturas.map(item => item.nome).filter(item => item !== celsius.nome);
        break;
    default:
        opcoesMedidas = volumes.map(item => item.nome).filter(item => item !== litro.nome);
    }

    const opcoes: string[] = [padrao, ...opcoesMedidas];

    const enviarAoHistorico = () => {
        // verifica se é os valores são válidos para o tipo da conversão
        if (converterDeState !== celsius.nome && +entrada < 0) alert("o valor não pode ser negativo");
        else {
            // constroi um item do historico
            const item: IHistoricoItem = {
                id: FSetId(),
                unidade_a_converter: encontrarSimbolo(converterDeState),
                unidade_convertida: encontrarSimbolo(converterParaState),
                valor_a_converter: +(+entrada).toFixed(2),
                valor_convertido: +(+valorConvertido).toFixed(2)
            };

            // adiciona o item no historico (função implementada em util/hooks/useAdicionaItem)
            adicionarItem(item);

            // define o valor e a unidade de saida no campo de saida
            setUnidadeSaida(encontrarSimbolo(converterParaState));
            setSaida(valorConvertido.toFixed(2));
        }
    };

    // define a constante "converterDe" para o valor selecionado 
    const handleChangeDe = (event: SelectChangeEvent<string>) => {
        setConverterDe(event.target.value);
        setEntrada("0");
        setConverterPara(opcoes[0]);
        setSaida("");
        setUnidadeSaida("");
    };

    // define a constante "converterPara" para o valor selecionado
    const handleChangePara = (event: SelectChangeEvent<string>) => {
        setConverterPara(event.target.value);
    };

    // stribui o valor "converterPara" assim que a pagina carrega
    useEffect(() => {
        setConverterPara(opcoes[0]);
    }, []);

    // habilita ou desabilita o botão de converter se o valor de "converterPara" for válido
    useEffect(() => {
        if (converterParaState !== padrao) {
            setDesabilitado(false);
        }else{
            setDesabilitado(true);
        }
    }, [converterParaState]);
    


    return (
        <Box
            className={
                classNames({
                    [style.corpo]: true,
                    [tema.gamer]: gamerState
                })}
            component={Paper}
        >
            <div className={style.inputs}>
                {/* seletor da unidade a ser convertida. altera o estado da tabela da pagina */}
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

                {/* valor a ser convertida */}
                <TextField label="valor a converter" variant="filled" type={"number"}
                    id="entrada"
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                />

                {/* seletor do valor para o qual converter */}
                <Seletor
                    label={"converter para"}
                    id={"converter_para"}
                    itens={opcoes.map((item) => { return { Nome: item }; })}
                    onChange={handleChangePara}
                    value={converterParaState}
                />
            </div>

            <div className={style.output}>
                {/* valor da conversao */}
                <p>conversao: {saida}{unidadeSaida}</p>

                {/* botao para converter e adicionar a conversao ao historico */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={enviarAoHistorico}
                    disabled={desabilitado}
                >
                    Converter
                </Button>
            </div>

        </Box>
    );
};

export default Conversor;