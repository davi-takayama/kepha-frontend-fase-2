import classNames from "classnames";
import Historico from "components/Historico";
import Nav from "components/Nav";
import { StrictMode } from "react";
import s from "./App.module.scss";
import t from "util/temas.module.scss";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";
import Footer from "components/Footer";
import Conversor from "components/Conversor";
import Tabela from "components/Tabela";

export default function App() {
    const modoState = useRecoilValue(modo);

    return (
        <StrictMode>
            <div className={classNames({
                [s.app]: true,
                [t.light__bg__base]: modoState,
                [t.dark__bg__base]: !modoState,
            })}>
                <div className={s.fr}>
                    <div>
                        <Nav />
                        <Conversor />
                        <Tabela />
                    </div>
                    <Historico />
                </div>
                <Footer />
            </div>
        </StrictMode>
    );
}