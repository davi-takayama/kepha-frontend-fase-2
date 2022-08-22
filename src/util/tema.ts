import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

// tema escuro criado com base no tema do material-ui
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blueGrey[100],
            light: blueGrey[50],
            dark: blueGrey[200],
        },
        secondary: {
            main: blueGrey[800],
            light: blueGrey[700],
            dark: blueGrey[900],
        },
        background:{
            paper: blueGrey[900]
        }
    },
});

// tema claro criado com base no tema do material-ui
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary:{
            main: blueGrey[900],
            light: blueGrey[700],
            dark: blueGrey[900],
        },
        secondary: {
            main: blueGrey[100],
            light: blueGrey[50],
            dark: blueGrey[200],
        },
        background:{
            paper: blueGrey[50],
        }
    },
});