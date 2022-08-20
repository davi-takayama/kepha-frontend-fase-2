import { atom } from "recoil";
import { litro } from "util/valores/volume";
import { IHistoricoItem } from "../interfaces/IHistoricoItem";

export const claro_escuro = atom({
    key: "claro_escuro",
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