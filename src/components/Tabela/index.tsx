import style from "./Tabela.module.scss";
import tema from "styles/temaGamer.module.scss";
import classNames from "classnames";
import { Box, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Corpo from "./Corpo";
import THead from "./THead";
import { useRecoilValue } from "recoil";
import { gamer } from "util/states/atom";

function Tabela() {
    const gamerState = useRecoilValue(gamer);

    return (
        <Box
            className={classNames({
                [style.corpo]: true,
                [tema.gamer]: gamerState,
            })}
            component={Paper}
        >
            <h2 className={classNames({ [style.titulo]: true, })}>
                Tabela de conversões
            </h2>

            <TableContainer component={Card}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                medida
                            </TableCell>

                            {/* componente da primeira linha da tabela */}
                            <THead />

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* componente do resto do corpo da tabela */}
                        <Corpo />

                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}

export default Tabela;