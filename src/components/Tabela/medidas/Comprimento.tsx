import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";
import classNames from "classnames";
import t from "util/temas.module.scss";
import { comprimentos } from "util/valores/comprimento";

export default function ComprimentosTable() {

    const modoState = useRecoilValue(modo);
    
    return (
        <TableContainer component={Paper}>
            <Table
                className={classNames({
                    [t.dark__bg__secundaria]: !modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })}
            >
                <TableHead>
                    <TableRow>
                        <TableCell
                            className={classNames({
                                [t.dark__txt__quaternaria]: !modoState,
                            })}
                        >
                            medida
                        </TableCell>
                        {
                            comprimentos.map((item, index) => {
                                return (
                                    <TableCell key={index}
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >
                                        {item.nome + " (" + item.simbolo + ")"}
                                    </TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        comprimentos.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.nome + " (" + item.simbolo + ")"}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emMetro}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emMilhas}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emPes}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}