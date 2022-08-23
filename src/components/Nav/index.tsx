import style from "./Nav.module.scss";
import temaG from "styles/temaGamer.module.scss";
import { Box, Paper } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { gamer, tema } from "util/states/atom";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";

import classNames from "classnames";
import SwitchComponent from "./SwitchComponent";

export default function Nav() {
    const modoState = useRecoilValue(tema);
    const setModoState = useSetRecoilState(tema);
    const gamerState = useRecoilValue(gamer);
    const setGamerState = useSetRecoilState(gamer);

    function trocarTemaClaroEscuro() {
        setModoState(!modoState);
    }

    function trocarTemaGamer() {
        setGamerState(!gamerState);
    }

    return (
        <Box
            className={
                classNames({
                    [style.nav]: true,
                    [temaG.gamer]: gamerState
                })}
            component={Paper}
        >
            <h1 className={style.titulo}>
                conversor de medidas
            </h1>

            <div className={style.switches}>
                {/* switch que alterna entre modo gamer e normal */}
                <SwitchComponent
                    checked={gamerState}
                    onClick={trocarTemaGamer}
                    icons={{
                        on: <VideogameAssetIcon />,
                        off: <VideogameAssetOffIcon />
                    }}
                />

                {/* switch que alterna entre modo claro e escuro */}
                <SwitchComponent
                    checked={modoState}
                    onClick={trocarTemaClaroEscuro}
                    icons={{
                        on: <LightModeIcon />,
                        off: <ModeNightIcon />
                    }}
                />
            </div>


        </Box>
    );
}