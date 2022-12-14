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

    // mapeia o conteudo do corpo de acordo com a medida selecionada
    switch (medidaState) {
    case metro.nome:
        corpoTabela = comprimentos.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emMetro}m</TableCell>
                    <TableCell>{item.emPes}ft</TableCell>
                    <TableCell>{item.emMilhas}mi</TableCell>
                </TableRow>
            );
        });
        break;
    case litro.nome:
        corpoTabela = volumes.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emLitro.toFixed(3)}L</TableCell>
                    <TableCell>{item.emOncas.toFixed(3)}fl.oz</TableCell>
                    <TableCell>{item.emGaloes.toFixed(3)}gal</TableCell>
                </TableRow>
            );
        });
        break;
    case celsius.nome:
        corpoTabela = temperaturas.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emCelsius(0).toFixed(2)}°C</TableCell>
                    <TableCell>{item.emKelvin(0).toFixed(2)}K</TableCell>
                    <TableCell>{item.emFahrenheit(0).toFixed(2)}°F</TableCell>
                </TableRow>
            );
        });
        break;
    case quilo.nome:
        corpoTabela = massas.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                    <TableCell>{item.emQuilos}</TableCell>
                    <TableCell>{item.emLibras}</TableCell>
                    <TableCell>{item.emOncas}</TableCell>
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