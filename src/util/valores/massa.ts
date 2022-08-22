import { IMassa } from "util/interfaces/IMassa";

// itens do tipo massa
export const quilo: IMassa = {
    nome: "Quilo",
    simbolo: "kg",
    emQuilos: 1,
    emLibras: 2.20462,
    emOncas: 35.274
};

export const libras: IMassa = {
    nome: "Libra",
    simbolo: "lb",
    emQuilos: 0.453592,
    emLibras: 1,
    emOncas: 0.0625
};

export const onca: IMassa = {
    nome: "Onca",
    simbolo: "oz",
    emQuilos: 0.0283495,
    emLibras: 0.0625,
    emOncas: 1
};

//array com todos os massas
export const massas: IMassa[] = [quilo, libras, onca];