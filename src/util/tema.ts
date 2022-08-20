import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark", 
        primary: {
            main: "#00bcd4",
            contrastText: "#fff"
        },
        secondary: {
            main: "#fff",
            contrastText: "#000"
        }
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});