import { IHistoricoItem } from "util/interfaces/IHistoricoItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Delete from "@mui/icons-material/Delete";
import s from "./Item.module.scss";
import { Button } from "@mui/material";
import { useRemoveItem } from "util/hooks/useRemoveItem";

interface IProps {
    item: IHistoricoItem;
}

export default function Item({ item }: IProps) {

    const removeItem = useRemoveItem();

    return (
        <li className={s.item}>
            <div className={s.valores}>
                <div>
                    {item.valor_a_converter}{item.unidade_a_converter}
                </div>
                <ArrowForwardIcon />
                <div>
                    {item.valor_convertido}{item.unidade_convertida}
                </div>
            </div>
            <Button
                onClick={() => removeItem(item.id)}
            >
                <Delete />
            </Button>
        </li>
    );
}