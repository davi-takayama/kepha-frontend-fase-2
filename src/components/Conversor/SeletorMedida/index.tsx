import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { converterPara, medida } from "util/states/atom";

interface Props {
    opcoes: string[];
}

function SeletorMedida(prop: Props) {
    const setConverterPara = useSetRecoilState(converterPara);
    const converterParaState = useRecoilValue(converterPara);
    const medidaState = useRecoilValue(medida);

    const handleChange = (event: SelectChangeEvent) => {
        setConverterPara(event.target.value);
    };

    useEffect(() =>{
        if(converterParaState === ""){
            setConverterPara(prop.opcoes[0]);
        }else{
            setConverterPara(converterParaState);
        }
    },[medidaState, prop.opcoes]);

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="seletor-medida">para:</InputLabel>
            <Select
                autoWidth
                labelId="seletor-medida"
                id="demo-simple-select"
                value={converterParaState}
                label="para:"
                onChange={handleChange}
            >
                {
                    prop.opcoes.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SeletorMedida;