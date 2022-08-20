import style from "./App.module.scss";
import Historico from "components/Historico";
import Nav from "components/Nav";
import { StrictMode } from "react";
import Footer from "components/Footer";
import Conversor from "components/Conversor";
import Tabela from "components/Tabela";
import { Box, CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "util/tema";
import { claro_escuro } from "util/states/atom";
import { useRecoilValue } from "recoil";

export default function App() {
    const modoState = useRecoilValue(claro_escuro);

    return (
        <StrictMode>
            <ThemeProvider theme={!modoState? darkTheme : lightTheme}>
                <CssBaseline />
                <Box className={style.page}>
                    <Box component={Paper} className={style.main}>
                        <section>
                            <Nav />
                            <Box className={style.content}>
                                <Conversor />
                                <Tabela />
                            </Box>
                        </section>
                        <Historico />
                    </Box>
                    <Footer />
                </Box>
            </ThemeProvider>
        </StrictMode>
    );
}