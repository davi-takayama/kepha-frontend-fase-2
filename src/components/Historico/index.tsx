import s from "./Historico.module.scss";
import t from "util/temas.module.scss";
import classNames from "classnames";
import Item from "./Item";
import { historico, modo } from "util/states/atom";
import { useRecoilValue } from "recoil";


export default function Historico() {
    const itens = useRecoilValue(historico);
    const modoState = useRecoilValue(modo);

    return (
        <aside className={
            classNames({
                [s.historico]: true,
                [t.light__bg__terciaria]: modoState,
                [t.dark__bg__terciaria]: !modoState,
            })}>
            <h1 className={
                classNames({
                    [s.historico__titulo]: true,
                    [t.light__bg__secundaria]: modoState,
                    [t.light__txt__quaternaria]: modoState,
                    [t.dark__bg__secundaria]: !modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })}
            >Histórico de conversões</h1>

            <ul className={classNames({
                [s.historico__lista]: true,
                [t.light__bg__terciaria]: modoState,
                [t.dark__bg__terciaria]: !modoState,
            })}>
                {itens.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </aside>
    );
}