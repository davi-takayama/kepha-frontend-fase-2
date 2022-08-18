import Switch from "@mui/material/Switch";
import s from "./Switches.module.scss";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { modo } from "util/states/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import classNames from "classnames";

function Switches() {
    const modoState = useRecoilValue(modo);
    const setModoState = useSetRecoilState(modo);

    function mudarTemaC_E() {
        setModoState(!modoState);
    }

    return (
        <div className={s.switches}>
            <div className={classNames({
                [s.switch]: true,
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
