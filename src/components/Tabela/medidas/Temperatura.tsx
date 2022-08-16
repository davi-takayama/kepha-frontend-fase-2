import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import t from "util/temas.module.scss";
import { modo } from "util/states/atom";
import { temperaturas } from "util/valores/temperatura";

export default function TemperaturaTable() {
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
                        >medida</TableCell>
                        {
                            temperaturas.map((item, index) => {
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
                        temperaturas.map((item, index) => {
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
                                    >{item.emCelsius(0).toFixed(2)}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emFahrenheit(0).toFixed(2)}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emKelvin(0).toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        }
                        )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}