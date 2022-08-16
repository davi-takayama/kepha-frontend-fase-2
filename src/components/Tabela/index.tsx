import { medida, modo } from "util/states/atom";
import s from "./Tabela.module.scss";
import t from "util/temas.module.scss";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import ComprimentosTable from "./medidas/Comprimento";
import MassaTable from "./medidas/Massa";
import TemperaturaTable from "./medidas/Temperatura";
import VolumeTable from "./medidas/Volume";

function Tabela() {

    const modoState = useRecoilValue(modo);
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
    case "volume":
        tabela = <VolumeTable />;
        break;
    default:
        tabela = <div></div>;
        break;
    }

    return (
        <section className={classNames({
            [s.corpo]: true,
            [t.light__bg__terciaria]: modoState,
            [t.dark__bg__terciaria]: !modoState,
        })}>
            <h2
                className={classNames({
                    [s.titulo]: true,
                    [t.light__txt__quaternaria]: modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })}
            >
                Tabela de conversões
            </h2>

            {tabela}

        </section>
    );
}

export default Tabela;