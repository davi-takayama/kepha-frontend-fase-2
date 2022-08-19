import { atom } from "recoil";
import { galao, litro } from "util/valores/volume";
import { IHistoricoItem } from "../interfaces/IHistoricoItem";

export const modo = atom({
    key: "light-dark",
    default: true
});

export const gamer = atom({
    key: "gamer",
    default: true
});

export const historico = atom<IHistoricoItem[]>({
    key: "historico",
    default: []
});

export const converterDe = atom({
    key: "ConverterDe",
    default: litro.nome
});

export const converterPara = atom({
    key: "converterPara",
    default: ""
});