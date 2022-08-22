import { TableCell } from "@mui/material";
import { useRecoilValue } from "recoil";
import { converterDe } from "util/states/atom";
import { metro, comprimentos } from "util/valores/comprimento";
import { quilo, massas } from "util/valores/massa";
import { celsius, temperaturas } from "util/valores/temperatura";
import { litro, volumes } from "util/valores/volume";

export default function THead() {
    const medidaState = useRecoilValue(converterDe);
    let headerTabela;

    //mapeia o conteudo da primeira linha de acordo com a medida selecionada
    switch (medidaState) {
    case metro.nome:
        headerTabela = comprimentos.map((item, index) => {
            return (
                <TableCell
                    key={index}>
                    {item.nome + " (" + item.simbolo + ")"}
                </TableCell>
            );
        });
        break;
    case litro.nome:
        headerTabela = volumes.map((item, index) => {
            return (
                <TableCell
                    key={index}>
                    {item.nome + " (" + item.simbolo + ")"}
                </TableCell>
            );
        }
        );
        break;
    case celsius.nome:
        headerTabela = temperaturas.map((item, index) => {
            return (
                <TableCell
                    key={index}>
                    {item.nome + " (" + item.simbolo + ")"}
                </TableCell>
            );
        });
        break;
    case quilo.nome:
        headerTabela = massas.map((item, index) => {
            return (
                <TableCell
                    key={index}>
                    {item.nome + " (" + item.simbolo + ")"}
                </TableCell>
            );
        }
        );
        break;
    }

    return (
        <>
            {headerTabela}
        </>
    );
}
