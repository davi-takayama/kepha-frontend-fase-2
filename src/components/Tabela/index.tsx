import s from "./Tabela.module.scss";
import classNames from "classnames";
import { Box, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Corpo from "./Corpo";
import THead from "./THead";

function Tabela() {
    return (
        <Box
            className={classNames({
                [s.corpo]: true,
            })}
            component={Paper}
        >
            <h2 className={classNames({[s.titulo]: true,})}>
                Tabela de conversões
            </h2>

            <TableContainer component={Card}>
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

        </Box>
    );
}

export default Tabela;