import { TableRow, TableCell } from "@mui/material";
import { useRecoilValue } from "recoil";
import { converterDe } from "util/states/atom";
import { metro, comprimentos } from "util/valores/comprimento";
import { massas, quilo } from "util/valores/massa";
import { celsius, temperaturas } from "util/valores/temperatura";
import { litro, volumes } from "util/valores/volume";

export default function Corpo() {
    const medidaState = useRecoilValue(converterDe);
    let corpoTabela;

    switch (medidaState) {
    case metro.nome:
        corpoTabela = comprimentos.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emMetro.toFixed(2)}</TableCell>
                    <TableCell>{item.emPes.toFixed(2)}</TableCell>
                    <TableCell>{item.emMilhas.toFixed(2)}</TableCell>
                </TableRow>
            );
        });
        break;
    case litro.nome:
        corpoTabela = volumes.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emLitro.toFixed(2)}</TableCell>
                    <TableCell>{item.emOncas.toFixed(2)}</TableCell>
                    <TableCell>{item.emGaloes.toFixed(2)}</TableCell>
                </TableRow>
            );
        });
        break;
    case celsius.nome:
        corpoTabela = temperaturas.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emCelsius(0).toFixed(2)}</TableCell>
                    <TableCell>{item.emKelvin(0).toFixed(2)}</TableCell>
                    <TableCell>{item.emFahrenheit(0).toFixed(2)}</TableCell>
                </TableRow>
            );
        });
        break;
    case quilo.nome:
        corpoTabela = massas.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emQuilos.toFixed(2)}</TableCell>
                    <TableCell>{item.emLibras.toFixed(2)}</TableCell>
                    <TableCell>{item.emOncas.toFixed(2)}</TableCell>
                </TableRow>
            );
        });
        break;

    }
    return (
        <>
            {corpoTabela}
        </>
    );
}