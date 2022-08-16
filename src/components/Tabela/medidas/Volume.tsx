import t from "util/temas.module.scss";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";
import { volumes } from "util/valores/volume";

export default function VolumeTable() {
    const modoState = useRecoilValue(modo);

    return (
        <TableContainer component={Paper}>
            <Table
                className={classNames({
                    [t.dark__bg__secundaria]: !modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })}>
                <TableHead>
                    <TableRow>
                        <TableCell
                            className={classNames({
                                [t.dark__txt__quaternaria]: !modoState,
                            })}
                        >medida</TableCell>
                        {
                            volumes.map((item, index) => {
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
                        volumes.map((item, index) => {
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
                                    >{item.emLitro}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emOncas}</TableCell>
                                    <TableCell
                                        className={classNames({
                                            [t.dark__txt__quaternaria]: !modoState,
                                        })}
                                    >{item.emGaloes}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}