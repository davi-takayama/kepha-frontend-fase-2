import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./reset.css";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "util/tema";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <App />
                </CssBaseline>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>
);