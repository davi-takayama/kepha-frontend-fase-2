import style from "./App.module.scss";
import Historico from "components/Historico";
import Nav from "components/Nav";
import { StrictMode } from "react";
import Footer from "components/Footer";
import Conversor from "components/Conversor";
import Tabela from "components/Tabela";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "util/tema";
import { tema } from "util/states/atom";
import { useRecoilValue } from "recoil";

export default function App() {
    const modoState = useRecoilValue(tema);

    return (
        <StrictMode>
            <ThemeProvider theme={!modoState? darkTheme : lightTheme}>
                <CssBaseline />
                <Box className={style.page}>
                    <div className={style.main}>
                        <section>
                            <Nav />
                            <Box className={style.content}>
                                <Conversor />
                                <Tabela />
                            </Box>
                        </section>
                        <Historico />
                    </div>
                    <Footer />
                </Box>
            </ThemeProvider>
        </StrictMode>
    );
}