import s from "./Tabela.module.scss";
import classNames from "classnames";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Corpo from "./Corpo";
import THead from "./THead";

function Tabela() {
    return (
        <section className={classNames({
            [s.corpo]: true,
        })}>
            <h2
                className={classNames({
                    [s.titulo]: true,
                })}
            >
                Tabela de conversões
            </h2>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                medida
                            </TableCell>
                            {
                                //header da tabela
                                <THead />
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            //corpo da tabela
                            <Corpo />
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </section>
    );
}

export default Tabela;

