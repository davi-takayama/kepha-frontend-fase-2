import s from "./Nav.module.scss";
import { Box, Paper, Switch } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tema } from "util/states/atom";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Nav() {
    const modoState = useRecoilValue(tema);
    const setModoState = useSetRecoilState(tema);

    function trocarTema() {
        setModoState(!modoState);
    }

    return (
        <Box
            className={s.nav}
            component={Paper}
        >
            <h1 className={s.titulo}>
                conversor de medidas
            </h1>
            <div className={s.switch}>

                {/* switch que alterna entre modo claro e escuro */}
                <Switch
                    checked={modoState}
                    onClick={trocarTema}
                />
                {modoState ?
                    <LightModeIcon className={s.switch__icon} /> :
                    <ModeNightIcon className={s.switch__icon} />}
            </div>
        </Box>
    );
}