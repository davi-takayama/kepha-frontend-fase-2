import { ITemperatura } from "util/interfaces/ITemperatura";

// itens do tipo temperatura
export const celsius: ITemperatura = {
    nome: "Celsius",
    simbolo: "°C",
    emCelsius: (valor: number) => valor,
    emKelvin: (valor: number) => valor + 273.15,
    emFahrenheit: (valor: number) => valor * 1.8 + 32
};

export const kelvin: ITemperatura = {
    nome: "Kelvin",
    simbolo: "K",
    emCelsius: (valor: number) => valor - 273.15,
    emKelvin: (valor: number) => valor,
    emFahrenheit: (valor: number) => (valor - 273.15) * 1.8 + 32
};

export const fahrenheit: ITemperatura = {
    nome: "Fahrenheit",
    simbolo: "°F",
    emCelsius: (valor: number) => (valor - 32) / 1.8,
    emKelvin: (valor: number) => (valor - 32) / 1.8 + 273.15,
    emFahrenheit: (valor: number) => valor
};

// array com todos os tipos de temperatura
export const temperaturas: ITemperatura[] = [celsius, kelvin, fahrenheit];