import s from "./Nav.module.scss";
import classNames from "classnames";
import { Box, Paper, Switch } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { claro_escuro } from "util/states/atom";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Nav() {
    const modoState = useRecoilValue(claro_escuro);
    const setModoState = useSetRecoilState(claro_escuro);

    function mudarTemaC_E() {
        setModoState(!modoState);
    }

    return (
        <Box
            className={classNames({ [s.nav]: true, })}
            component={Paper}
        >
            <h1 className={
                classNames({
                    [s.titulo]: true,
                })
            }>
                conversor de medidas
            </h1>
            <div className={s.switch}>
                <Switch
                    checked={modoState}
                    onClick={mudarTemaC_E}
                />
                {modoState ?
                    <LightModeIcon className={s.switch__icon} /> :
                    <ModeNightIcon className={s.switch__icon} />}
            </div>
        </Box>
    );
}