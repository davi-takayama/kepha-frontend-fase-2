import t from "util/temas.module.scss";
import s from "./SeletorTipo.module.scss";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import classNames from "classnames";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modo, medida } from "util/states/atom";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ScaleIcon from "@mui/icons-material/Scale";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScienceIcon from "@mui/icons-material/Science";

function SeletorTipo() {

    const modoState = useRecoilValue(modo);
    const medidaState = useRecoilValue(medida);
    const setMedidaState = useSetRecoilState(medida);

    const handleChange = (event: SelectChangeEvent) => {
        setMedidaState(event.target.value);
    };

    return (
        <FormControl
            sx={{ minWidth: 120, }}
            className={classNames({
                [t.dark__bg__secundaria]: !modoState,
            })}
            variant="filled"
        >
            <InputLabel id="seletor-de-medidas">
                Converter
            </InputLabel>
            <Select
                labelId="seletor-de-medidas"
                id="demo-simple-select"
                value={medidaState}
                label="medida"
                onChange={handleChange}
            >
                <MenuItem value={"volume"} className={s.item}>
                    <ScienceIcon /> Volume
                </MenuItem>

                <MenuItem value={"comprimento"} className={s.item}>
                    <StraightenIcon /> Comprimento
                </MenuItem>

                <MenuItem value={"massa"} className={s.item}>
                    <ScaleIcon /> Massa
                </MenuItem>

                <MenuItem
                    value={"temperatura"} className={s.item}>
                    <ThermostatIcon /> Temperatura
                </MenuItem>

            </Select>
        </FormControl>
    );
}

export default SeletorTipo;