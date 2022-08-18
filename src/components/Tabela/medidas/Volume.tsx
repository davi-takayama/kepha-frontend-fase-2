import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { volumes } from "util/valores/volume";

export default function VolumeTable() {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>medida</TableCell>
                        {
                            volumes.map((item, index) => {
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
                        volumes.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                                    <TableCell>{item.emLitro}</TableCell>
                                    <TableCell>{item.emOncas}</TableCell>
                                    <TableCell>{item.emGaloes}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}