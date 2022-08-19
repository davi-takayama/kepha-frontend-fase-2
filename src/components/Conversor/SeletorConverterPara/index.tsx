import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { converterDe, converterPara } from "util/states/atom";

interface Props {
    opcoes: string[];
}

function SeletorConverterPara(prop: Props) {
    const setConverterPara = useSetRecoilState(converterPara);
    const converterParaState = useRecoilValue(converterPara);

    const handleChange = (event: SelectChangeEvent) => {
        setConverterPara(event.target.value);
    };

    useEffect(() => {
        console.log("AAAAAAAAAAAAAAAAAAA");
        console.log(prop.opcoes[0]);
        setConverterPara(prop.opcoes[0]);
    }, [converterDe]);

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="seletor-medida">para:</InputLabel>
            <Select
                autoWidth
                labelId="seletor-medida"
                id="seletorTipo"
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

export default SeletorConverterPara;