import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface IItens {
    Nome: string;
    Icone?: JSX.Element;
}

interface Props {
    label: string;
    id: string;
    itens: IItens[];
    onChange: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined;
    value: string;
}

export default function Seletor(prop: Props) {

    return (
        <FormControl
            sx={{ width: 200}}
            variant="filled"
        >
            <InputLabel id={prop.id}>
                {prop.label}
            </InputLabel>

            <Select
                labelId={prop.id}
                id={prop.id}
                value={prop.value}
                label={prop.label}
                onChange={prop.onChange}
            >
                {
                    prop.itens.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item.Nome}>
                                {item.Icone? item.Icone : null}
                                {item.Nome}
                            </MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>
    );
}