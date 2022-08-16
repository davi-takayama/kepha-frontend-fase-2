import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import classNames from "classnames";
import t from "util/temas.module.scss";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";
import { massas } from "util/valores/massa";

export default function MassasmassasTable() {

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
                            massas.map((item, index) => {
                                return (
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                        key={index}>
                                        {item.nome + " (" + item.simbolo + ")"}
                                    </TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        massas.map((item, index) => {
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
                                    >{item.emQuilos}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emLibras}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emOncas}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}