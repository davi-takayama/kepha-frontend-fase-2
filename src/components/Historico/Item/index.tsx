import { IHistoricoItem } from "util/interfaces/IHistoricoItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Delete from "@mui/icons-material/Delete";
import s from "./Item.module.scss";
import { Button } from "@mui/material";
import { useRemoveItem } from "util/hooks/useRemoveItem";
import { useRecoilValue } from "recoil";
import { claro_escuro } from "util/states/atom";
import classNames from "classnames";

interface IProps {
    item: IHistoricoItem;
}

export default function Item({ item }: IProps) {
    const modoState = useRecoilValue(claro_escuro);

    const removeItem = useRemoveItem();

    return (
        <li
            className={
                classNames({
                    [s.item]: true,
                    [s.item__light]: !modoState,
                    [s.item__dark]: modoState
                })
            }>
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