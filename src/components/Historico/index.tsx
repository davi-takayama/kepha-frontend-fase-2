import s from "./Historico.module.scss";
import Item from "./Item";
import { historico } from "util/states/atom";
import { useRecoilValue } from "recoil";
import { Box, Paper } from "@mui/material";

export default function Historico() {
    const itens = useRecoilValue(historico);

    return (
        <Box
            className={s.container}
            component={Paper}
        >
            <aside className={s.historico}>
                <h1 className={s.historico__titulo}>
                    Histórico de conversões
                </h1>

                <ul className={s.historico__lista}>

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