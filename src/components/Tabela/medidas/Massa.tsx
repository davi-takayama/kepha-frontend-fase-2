import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { massas } from "util/valores/massa";

export default function MassasmassasTable() {


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            medida
                        </TableCell>
                        {
                            massas.map((item, index) => {
                                return (
                                    <TableCell
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
                                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                                    <TableCell>{item.emQuilos}</TableCell>
                                    <TableCell>{item.emLibras}</TableCell>
                                    <TableCell>{item.emOncas}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}