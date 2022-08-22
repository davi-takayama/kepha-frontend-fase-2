import { useSetRecoilState } from "recoil";
import { historico } from "util/states/atom";

export const useRemoveItem = () => {
    const setHistorico = useSetRecoilState(historico);

    return (id: number) => {
        // remove o item selecionado do historico
        setHistorico(lista => lista.filter(itens => itens.id !== id));
    };
};