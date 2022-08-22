import { useRecoilValue } from "recoil";
import { converterPara } from "util/states/atom";
import { metro, milhas, pes } from "util/valores/comprimento";
import { libras, onca, quilo } from "util/valores/massa";
import { celsius, fahrenheit, kelvin } from "util/valores/temperatura";
import { galao, litro, oncasFluidas } from "util/valores/volume";

//pega o valor converter e o transforma de acordo com a unidade de origem e destino
export function FConverter(valor: number): number {
    const para = useRecoilValue(converterPara);

    switch (para) {
    case oncasFluidas.nome:
        return valor * litro.emOncas;
    case galao.nome:
        return valor * litro.emGaloes;
    case pes.nome:
        return valor * metro.emPes;
    case milhas.nome:
        return valor * metro.emMilhas;
    case onca.nome:
        return valor * quilo.emOncas;
    case libras.nome:
        return valor * quilo.emLibras;
    case kelvin.nome:
        return celsius.emKelvin(valor);
    case fahrenheit.nome:
        return celsius.emFahrenheit(valor);
    default:
        return valor;
    }
}