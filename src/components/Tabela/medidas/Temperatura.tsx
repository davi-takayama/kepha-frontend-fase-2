import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { temperaturas } from "util/valores/temperatura";

export default function TemperaturaTable() {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>medida</TableCell>
                        {
                            temperaturas.map((item, index) => {
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
                        temperaturas.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.nome + " (" + item.simbolo + ")"}</TableCell>
                                    <TableCell>{item.emCelsius(0).toFixed(2)}</TableCell>
                                    <TableCell>{item.emKelvin(0).toFixed(2)}</TableCell>
                                    <TableCell>{item.emFahrenheit(0).toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        }
                        )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}