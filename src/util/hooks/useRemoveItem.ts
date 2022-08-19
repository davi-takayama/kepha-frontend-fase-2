import { useSetRecoilState } from "recoil";
import { historico } from "util/states/atom";

export const useRemoveItem = () => {
    const setHistorico = useSetRecoilState(historico);

    return (id: number) => {
        //remove the item from historico
        setHistorico(lista => lista.filter(itens => itens.id !== id));
    };
};