import style from "./Conversor.module.scss";
import classNames from "classnames";
import { Box, Button, TextField } from "@mui/material";
import SeletorTipo from "./SeletorTipo";
import React from "react";
import SeletorMedida from "./SeletorMedida";
import { useRecoilValue } from "recoil";
import { medida } from "util/states/atom";
import { libras, onca } from "util/valores/massa";
import { galao, oncasFluidas } from "util/valores/volume";
import { milhas, pes } from "util/valores/comprimento";
import { fahrenheit, kelvin } from "util/valores/temperatura";
import { FConverter } from "util/funcoes/FConverter";

function Conversor() {

    const medidaState = useRecoilValue(medida);
    const [entrada, setEntrada] = React.useState("");
    const converter = (valor: number) => FConverter(valor); //perdi

    const volume: string[] = [oncasFluidas.nome, galao.nome];
    const comprimento: string[] = [pes.nome, milhas.nome];
    const massa: string[] = [onca.nome, libras.nome];
    const temperatura: string[] = [kelvin.nome, fahrenheit.nome];

    let opcoes: string[];
    switch (medidaState) {
    case "volume":
        opcoes = volume;
        break;
    case "comprimento":
        opcoes = comprimento;
        break;
    case "massa":
        opcoes = massa;
        break;
    case "temperatura":
        opcoes = temperatura;
        break;
    default:
        opcoes = volume;
    }

    const valorConvertido = converter(+entrada);

    return (
        <Box
            className={classNames({
                [style.corpo]: true,
            })}
            component="form"
            noValidate
            autoComplete="off"
        >
            <SeletorTipo />

            <TextField label="valor a converter" variant="filled" type={"number"}
                id="entrada"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
            />

            <SeletorMedida opcoes={opcoes} />

            <Button
                variant="contained"
                onClick={() => console.log(valorConvertido)}
                size="large"
            >
                Converter
            </Button>
        </Box>
    );
}

export default Conversor;