import { simbolos } from "util/valores/simbolos";

const FEncontrarSimbolo = () => {
    
    //encontra o simbolo da unidade de medida de acordo com o nome dela
    return (nome: string) => {
        const simbolo = simbolos.find(item => item.nome === nome);
        return simbolo ? simbolo.simbolo : "";
    };
};

export default FEncontrarSimbolo;