import { useRecoilValue } from "recoil";
import { converterPara } from "util/states/atom";
import { metro, milhas, pes } from "util/valores/comprimento";
import { libras, onca, quilo } from "util/valores/massa";
import { celsius, fahrenheit, kelvin } from "util/valores/temperatura";
import { galao, litro, oncasFluidas } from "util/valores/volume";

export function FConverter(valor: number): number {
    const para = useRecoilValue(converterPara);

    console.log(para + " (de FConverter)");
    switch (para) {
    case oncasFluidas.nome:
        console.log(para + " (de FConverter)");
        return valor * litro.emOncas;
    case galao.nome:
        console.log(para + " (de FConverter)");
        return valor * litro.emGaloes;
    case pes.nome:
        console.log(para + " (de FConverter)");
        return valor * metro.emPes;
    case milhas.nome:
        console.log(para + " (de FConverter)");
        return valor * metro.emMilhas;
    case onca.nome:
        console.log(para + " (de FConverter)");
        return valor * quilo.emOncas;
    case libras.nome:
        console.log(para + " (de FConverter)");
        return valor * quilo.emLibras;
    case kelvin.nome:
        console.log(para + " (de FConverter)");
        return celsius.emKelvin(valor);
    case fahrenheit.nome:
        console.log(para + " (de FConverter)");
        return celsius.emFahrenheit(valor);
    default:
        console.log(para + " (de FConverter)");
        return valor;
    }
}