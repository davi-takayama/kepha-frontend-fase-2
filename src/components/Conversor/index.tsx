import s from "./Conversor.module.scss";
import t from "util/temas.module.scss";
import classNames from "classnames";
import { Box, TextField } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";
import SeletorTipo from "./SeletorTipo";

function Conversor() {

    const modoState = useRecoilValue(modo);

    return (

        <Box
            className={classNames({
                [s.corpo]: true,
                [t.light__bg__terciaria]: modoState,
                [t.dark__bg__terciaria]: !modoState,
            })}
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <SeletorTipo />
            <TextField label="valor a converter" variant="filled" type={"number"}
                className={classNames({
                    [t.dark__bg__secundaria]: !modoState,
                })}
            />
        </Box>

    );
}

export default Conversor;