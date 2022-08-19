import { IVolume } from "util/interfaces/IVolume";

export const litro: IVolume = {
    nome: "Litro",
    simbolo: "L",
    emLitro: 1,
    emOncas: 33.814,
    emGaloes: 0.264172,
};

export const oncasFluidas: IVolume = {
    nome: "Onça Fluida",
    simbolo: "fl oz",
    emLitro: 0.0295735,
    emOncas: 1,
    emGaloes: 0.0078125,
};

export const galao: IVolume = {
    nome: "Galão",
    simbolo: "gal",
    emLitro: 0.003785411784,
    emOncas: 0.125,
    emGaloes: 1,
};

export const volumes: IVolume[] = [litro, oncasFluidas, galao];