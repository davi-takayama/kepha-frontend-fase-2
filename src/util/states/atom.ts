import { atom } from "recoil";
import { galao } from "util/valores/volume";
import { IHistorico } from "../interfaces/IHistorico";

export const modo = atom({
    key: "light-dark",
    default: true
});

export const gamer = atom({
    key: "gamer",
    default: true
});

export const historico = atom<IHistorico[]>({
    key: "historico",
    default: []
});

export const medida = atom({
    key: "medida",
    default: "volume"
});

export const converterPara = atom({
    key: "converterPara",
    default: galao.nome
});