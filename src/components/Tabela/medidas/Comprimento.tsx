import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { comprimentos } from "util/valores/comprimento";

export default function ComprimentosTable() {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            medida
                        </TableCell>
                        {
                            comprimentos.map((item, index) => {
                                return (
                                    <TableCell key={index}>
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
                                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                                    <TableCell>{item.emMetro}</TableCell>
                                    <TableCell>{item.emPes}</TableCell>
                                    <TableCell>{item.emMilhas}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}