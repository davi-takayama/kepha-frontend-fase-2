import style from "./SeletorTipo.module.scss";
import { InputLabel, Select, MenuItem, SelectChangeEvent, FormControl } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { converterDe } from "util/states/atom";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ScaleIcon from "@mui/icons-material/Scale";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScienceIcon from "@mui/icons-material/Science";
import { litro } from "util/valores/volume";
import { celsius } from "util/valores/temperatura";
import { metro } from "util/valores/comprimento";
import { quilo } from "util/valores/massa";

function SeletorConverterDe() {

    const medidaState = useRecoilValue(converterDe);
    const setMedidaState = useSetRecoilState(converterDe);

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
                <MenuItem value={litro.nome} className={style.item}>
                    <ScienceIcon /> {litro.nome}
                </MenuItem>

                <MenuItem value={metro.nome} className={style.item}>
                    <StraightenIcon /> {metro.nome}
                </MenuItem>

                <MenuItem value={quilo.nome} className={style.item}>
                    <ScaleIcon /> {quilo.nome}
                </MenuItem>

                <MenuItem
                    value={celsius.nome} className={style.item}>
                    <ThermostatIcon /> {celsius.nome}
                </MenuItem>

            </Select>
        </FormControl>
    );
}

export default SeletorConverterDe;