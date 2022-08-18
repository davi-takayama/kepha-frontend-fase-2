import style from "./SeletorTipo.module.scss";
import { InputLabel, Select, MenuItem, SelectChangeEvent, FormControl } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { medida } from "util/states/atom";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ScaleIcon from "@mui/icons-material/Scale";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScienceIcon from "@mui/icons-material/Science";

function SeletorTipo() {
    
    const medidaState = useRecoilValue(medida);
    const setMedidaState = useSetRecoilState(medida);

    const handleChange = (event: SelectChangeEvent) => {
        setMedidaState(event.target.value);
    };

    return (
        <FormControl
            sx={{ minWidth: 120, }}
            variant="filled"
        >
            <InputLabel id="seletor-de-medidas">
                Converter
            </InputLabel>

            <Select
                labelId="seletor-de-medidas"
                id="demo-simple-select"
                value={medidaState}
                label="Converter de:"
                onChange={handleChange}
            >
                <MenuItem value={"volume"} className={style.item}>
                    <ScienceIcon /> Litro
                </MenuItem>

                <MenuItem value={"comprimento"} className={style.item}>
                    <StraightenIcon /> Metro
                </MenuItem>

                <MenuItem value={"massa"} className={style.item}>
                    <ScaleIcon /> Quilo
                </MenuItem>

                <MenuItem
                    value={"temperatura"} className={style.item}>
                    <ThermostatIcon /> Celsius
                </MenuItem>

            </Select>
        </FormControl>
    );
}

export default SeletorTipo;