import { atom } from "recoil";
import { litro } from "util/valores/volume";
import { IHistoricoItem } from "../interfaces/IHistoricoItem";

export const tema = atom({
    key: "tema",
    default: true
});

export const gamer = atom({
    key: "gamer",
    default: false
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
    key: "ConverterPara",
    default: ""
});