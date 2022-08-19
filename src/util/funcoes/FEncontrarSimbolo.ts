import { simbolos } from "util/valores/simbolos";

const FEncontrarSimbolo = () => {
    const simbolosCopia = simbolos;
    
    return (nome: string) => {
        const simbolo = simbolosCopia.find(item => item.nome === nome);
        return simbolo ? simbolo.simbolo : "";
    };
};

export default FEncontrarSimbolo;