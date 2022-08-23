import { IHistoricoItem } from "util/interfaces/IHistoricoItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Delete from "@mui/icons-material/Delete";
import style from "./Item.module.scss";
import { Button } from "@mui/material";
import { useRemoveItem } from "util/hooks/useRemoveItem";
import { useRecoilValue } from "recoil";
import { tema } from "util/states/atom";
import classNames from "classnames";

interface IProps {
    item: IHistoricoItem;
}

export default function Item({ item }: IProps) {
    const modoState = useRecoilValue(tema);

    const removeItem = useRemoveItem();

    return (
        <li
            className={
                classNames({
                    [style.item]: true,
                    [style.item__light]: !modoState,
                    [style.item__dark]: modoState
                })
            }>
            <div className={style.valores}>
                <div>
                    {item.valor_a_converter}{item.unidade_a_converter}
                </div>
                <ArrowForwardIcon />
                <div>
                    {item.valor_convertido}{item.unidade_convertida}
                </div>
            </div>
            
            {/* botao para deletar o proprio item da lista */}
            <Button onClick={() => removeItem(item.id)}>
                <Delete />
            </Button>
        </li>
    );
}