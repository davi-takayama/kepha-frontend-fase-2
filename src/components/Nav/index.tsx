import s from "./Nav.module.scss";
import t from "util/temas.module.scss";
import classNames from "classnames";
import Switches from "components/Nav/Switches";
import { useRecoilValue } from "recoil";
import { gamer, modo } from "util/states/atom";

export default function Nav() {

    const modoState = useRecoilValue(modo);
    const gamerState = useRecoilValue(gamer);

    return (
        <nav className={
            classNames({
                [s.nav]: true,
                [t.light__bg__terciaria]: modoState,
                [t.dark__bg__terciaria]: !modoState,
                [t.rainbow]: !gamerState,
            })
        }>

            <h1 className={
                classNames({
                    [s.titulo]: true,
                    [t.light__txt__quaternaria]: modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })
            }>
                conversor de medidas
            </h1>

            <Switches />

        </nav>
    );
}