import { medida } from "util/states/atom";
import s from "./Tabela.module.scss";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import ComprimentosTable from "./medidas/Comprimento";
import MassaTable from "./medidas/Massa";
import TemperaturaTable from "./medidas/Temperatura";
import VolumeTable from "./medidas/Volume";

function Tabela() {

    const medidaState = useRecoilValue(medida);

    let tabela: JSX.Element;

    switch (medidaState) {
    case "comprimento":
        tabela = <ComprimentosTable />;
        break;
    case "massa":
        tabela = <MassaTable />;
        break;
    case "temperatura":
        tabela = <TemperaturaTable />;
        break;
    default:
        tabela = <VolumeTable />;
        break;
    }

    return (
        <section className={classNames({
            [s.corpo]: true,
        })}>
            <h2
                className={classNames({
                    [s.titulo]: true,
                })}
            >
                Tabela de conversões
            </h2>

            {tabela}

        </section>
    );
}

export default Tabela;