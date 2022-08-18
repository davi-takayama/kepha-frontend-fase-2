import style from "./App.module.scss";
import Historico from "components/Historico";
import Nav from "components/Nav";
import { StrictMode } from "react";
import Footer from "components/Footer";
import Conversor from "components/Conversor";
import Tabela from "components/Tabela";
import { Box, Paper } from "@mui/material";

export default function App() {

    return (
        <StrictMode>
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
        </StrictMode>
    );
}