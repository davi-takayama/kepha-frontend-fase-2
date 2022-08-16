import { useSetRecoilState } from "recoil";
import { historico } from "util/states/atom";
import { IHistorico } from "util/interfaces/IHistorico";

const useAdicionaItem = () => {
    const setListaHistorico = useSetRecoilState<IHistorico[]>(historico);

    return (item: IHistorico) => {
        setListaHistorico(oldList => [...oldList, item]);
    };

};

export default useAdicionaItem;