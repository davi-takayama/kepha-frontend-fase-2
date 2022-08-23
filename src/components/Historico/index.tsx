import style from "./Historico.module.scss";
import tema from "styles/temaGamer.module.scss";
import Item from "./Item";
import { gamer, historico } from "util/states/atom";
import { useRecoilValue } from "recoil";
import { Box, Paper } from "@mui/material";
import classNames from "classnames";

export default function Historico() {
    const itens = useRecoilValue(historico);
    const gamerState = useRecoilValue(gamer);

    return (
        <Box
            className={
                classNames({
                    [style.container]: true,
                    [tema.gamer]: gamerState,
                })}
            component={Paper}
        >
            <aside className={style.historico}>
                <h1 className={style.historico__titulo}>
                    Histórico de conversões
                </h1>

                <ul className={style.historico__lista}>

                    {/* mapeia todas as conversoes feitas dentro da lista do historico */}
                    {
                        itens.map((item) => (
                            <Item key={item.id} item={item} />
                        ))
                    }

                </ul>
            </aside>
        </Box>
    );
}