import { IHistorico } from "util/interfaces/IHistorico";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import s from "./Item.module.scss";
import t from "util/temas.module.scss";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";

interface IProps {
    item: IHistorico;
}

export default function Item({ item }: IProps) {
    const modoState = useRecoilValue(modo);

    return (
        <li className={classNames({
            [s.item]: true,
            [t.light__bg__secundaria]: modoState,
            [t.light__txt__base]: modoState,
            [t.dark__bg__secundaria]: !modoState,
            [t.dark__txt__base]: !modoState,
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