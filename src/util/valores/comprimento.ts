import { IComprimento } from "util/interfaces/IComprimento";

// itens do tipo comprimento
export const metro: IComprimento = {
    nome: "Metro",
    simbolo: "m",
    emMetro: 1,
    emPes: 3.28084,
    emMilhas: 0.0006213719
};

export const pes: IComprimento = {
    nome: "Pé",
    simbolo: "ft",
    emMetro: 0.3048,
    emPes: 1,
    emMilhas: 0.000189394
};

export const milhas: IComprimento = {
    nome: "Milha",
    simbolo: "mi",
    emMetro: 1609.34,
    emPes: 5280,
    emMilhas: 1
};

//array com todos os comprimentos
export const comprimentos: IComprimento[] = [metro, pes, milhas];