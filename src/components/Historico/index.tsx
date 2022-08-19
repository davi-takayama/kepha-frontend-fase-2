import s from "./Historico.module.scss";
import classNames from "classnames";
import Item from "./Item";
import { historico } from "util/states/atom";
import { useRecoilValue } from "recoil";
import { Box } from "@mui/material";


export default function Historico() {
    const itens = useRecoilValue(historico);

    return (
        <Box className={s.container}>
            <aside className={s.historico}>
                <h1 className={
                    classNames({
                        [s.historico__titulo]: true,
                    })}
                >Histórico de conversões</h1>

                <ul className={classNames({
                    [s.historico__lista]: true,
                })}>
                    {itens.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </ul>
            </aside>
        </Box>
    );
}