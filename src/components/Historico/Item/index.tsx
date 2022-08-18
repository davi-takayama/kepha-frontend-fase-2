import { IHistorico } from "util/interfaces/IHistorico";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import s from "./Item.module.scss";
import classNames from "classnames";

interface IProps {
    item: IHistorico;
}

export default function Item({ item }: IProps) {

    return (
        <li className={classNames({
            [s.item]: true,
        })}>
            <div>
                {item.valor_a_converter}{item.unidade_a_converter}
            </div>
            <ArrowForwardIcon />
            <div>
                {item.valor_convertido}{item.unidade_convertida}
            </div>
        </li>
    );
}