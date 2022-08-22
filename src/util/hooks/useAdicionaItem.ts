import { useSetRecoilState } from "recoil";
import { historico } from "util/states/atom";
import { IHistoricoItem } from "util/interfaces/IHistoricoItem";

const useAdicionaItem = () => {
    const setHistorico = useSetRecoilState(historico);

    //acrescenta um item novo ao historico
    return (item: IHistoricoItem) => {
        return setHistorico(listaAntiga  => [...listaAntiga, item]);
    };
};

export default useAdicionaItem;