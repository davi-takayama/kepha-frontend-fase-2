import Switch from "@mui/material/Switch";
import s from "./Switches.module.scss";
import t from "util/temas.module.scss";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { gamer, modo } from "util/states/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import classNames from "classnames";

function Switches() {
    const modoState = useRecoilValue(modo);
    const mudarTemaClaroEscuro = useSetRecoilState(modo);
    const gamerState = useRecoilValue(gamer);
    const mudarGamer = useSetRecoilState(gamer);

    function mudarTemaC_E() {
        mudarTemaClaroEscuro(!modoState);
    }
    function mudarGamer_N() {
        mudarGamer(!gamerState);
    }

    return (
        <div className={s.switches}>
            <div className={classNames({
                [s.switch]: true,
                [t.light__txt__quaternaria]: modoState,
                [t.dark__txt__quaternaria]: !modoState,
            })}>
                <Switch
                    checked={gamerState}
                    onClick={mudarGamer_N}
                />{
                    gamerState ?
                        <VideogameAssetOffIcon className="switch__icon" /> :
                        <VideogameAssetIcon className="switch__icon" />
                }
            </div>
            <div className={classNames({
                [s.switch]: true,
                [t.light__txt__quaternaria]: modoState,
                [t.dark__txt__quaternaria]: !modoState,
            })}>
                <Switch
                    checked={modoState}
                    onClick={mudarTemaC_E}
                />
                {modoState ?
                    <LightModeIcon className="switch__icon" /> :
                    <ModeNightIcon className="switch__icon" />}
            </div>
        </div>
    );
}

export default Switches;
