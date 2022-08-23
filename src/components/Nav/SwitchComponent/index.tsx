import style from "./Switch.module.scss";
import React from "react";
import {  Switch } from "@mui/material";

interface Props{
    checked: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    icons:{
        on: JSX.Element;
        off: JSX.Element;
    }
}

function SwitchComponent(prop: Props) {
    return(
        <div className={style.switch}>
            <Switch
                checked={prop.checked}
                onClick={prop.onClick}
            />
            {prop.checked ? prop.icons.on : prop.icons.off}
        </div>
    );
}

export default SwitchComponent;