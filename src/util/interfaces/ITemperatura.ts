export interface ITemperatura {
    nome: string;
    simbolo: string;
    emCelsius: (valor: number) => number;
    emFahrenheit: (valor: number) => number;
    emKelvin: (valor: number) => number;
}