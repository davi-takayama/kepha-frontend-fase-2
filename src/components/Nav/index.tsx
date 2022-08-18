import s from "./Nav.module.scss";
import classNames from "classnames";
import Switches from "components/Nav/Switches";
import { Box } from "@mui/material";

export default function Nav() {

    return (
        <Box className={
            classNames({
                [s.nav]: true,
            })
        }>
            <h1 className={
                classNames({
                    [s.titulo]: true,
                })
            }>
                conversor de medidas
            </h1>
            <Switches />
        </Box>
    );
}