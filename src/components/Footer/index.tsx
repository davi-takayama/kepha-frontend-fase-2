import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classNames from "classnames";
import s from "./Footer.module.scss";
import t from "util/temas.module.scss";
import { useRecoilValue } from "recoil";
import { modo } from "util/states/atom";

function Footer() {
    const modoState = useRecoilValue(modo);

    return (
        <footer className={
            classNames({
                [s.body]: true,
                [t.light__bg__terciaria]: modoState,
                [t.dark__bg__terciaria]: !modoState,
            })}>
            <p className={
                classNames({
                    [s.descricao]: true,
                    [t.light__txt__quaternaria]: modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })}>
                Aplicação web desenvolvida por Davi Gil Brito Vaz Takayama para o desafio da fase 2
                do projeto “talentus kepha”, da empresa “Kepha - aceleradora de negocios digitais”, seguindo
                a rota de front-end utilizando o framework react com typescript.
            </p>
            <div className={s.div}>
                <h2 className={classNames({
                    [s.titulo]: true,
                    [t.light__txt__quaternaria]: modoState,
                    [t.dark__txt__quaternaria]: !modoState,
                })}>
                    Contatos
                </h2>
                <ul className={
                    classNames({
                        [s.lista]: true,
                        [t.light__txt__quaternaria]: modoState,
                        [t.dark__txt__quaternaria]: !modoState,
                    })}>
                    <li className={classNames({
                        [s.lista__item]: true,
                    })}>
                        <a href="https://github.com/davi-takayama"
                            className={classNames({
                                [s.lista__item__link]: true,
                                [t.light__txt__quaternaria]: modoState,
                                [t.dark__txt__quaternaria]: !modoState,
                            })}>
                            <GitHubIcon /> | davi-takayama
                        </a>
                    </li>
                    <li className={classNames({
                        [s.lista__item]: true,
                        [t.light__txt__quaternaria]: modoState,
                        [t.dark__txt__quaternaria]: !modoState,

                    })}>
                        <a href="https://www.linkedin.com/in/davi-takayama-2bb81a233/"
                            className={classNames({
                                [s.lista__item__link]: true,
                                [t.light__txt__quaternaria]: modoState,
                                [t.dark__txt__quaternaria]: !modoState,
                            })}
                        >
                            <LinkedInIcon /> | davi takayama
                        </a>
                    </li>
                    <li className={classNames({
                        [s.lista__item]: true,
                        [t.dark__txt__quaternaria]: !modoState,
                        [t.light__txt__quaternaria]: modoState,

                    })}>
                        <EmailIcon /> | davi.takayama.vaz@gmail.com
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;