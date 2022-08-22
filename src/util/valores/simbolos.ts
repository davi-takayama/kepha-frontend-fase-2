import { comprimentos } from "./comprimento";
import { massas } from "./massa";
import { temperaturas } from "./temperatura";
import { volumes } from "./volume";

interface ISimbolos {
    nome: string;
    simbolo: string;
}

//mapeia todos os tipos de medida usados no sistema com seu nome e simbolo apenas
export const simbolos: ISimbolos[] = volumes.map(item => ({ nome: item.nome, simbolo: item.simbolo }))
    .concat(massas.map(item => ({ nome: item.nome, simbolo: item.simbolo })))
    .concat(comprimentos.map(item => ({ nome: item.nome, simbolo: item.simbolo })))
    .concat(temperaturas.map(item => ({ nome: item.nome, simbolo: item.simbolo })));