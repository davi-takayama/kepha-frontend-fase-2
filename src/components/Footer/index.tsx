import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classNames from "classnames";
import s from "./Footer.module.scss";

function Footer() {

    return (
        <footer className={
            classNames({
                [s.body]: true,
            })}>
            <p className={
                classNames({
                    [s.descricao]: true,
                })}>
                Aplicação web desenvolvida por Davi Gil Brito Vaz Takayama para o desafio da fase 2
                do projeto “talentus kepha”, da empresa “Kepha - aceleradora de negocios digitais”, seguindo
                a rota de front-end utilizando o framework react com typescript.
            </p>
            <div className={s.div}>
                <h2 className={classNames({
                    [s.titulo]: true,
                })}>
                    Contatos
                </h2>
                <ul className={
                    classNames({
                        [s.lista]: true,
                    })}>
                    <li className={classNames({
                        [s.lista__item]: true,
                    })}>
                        <a href="https://github.com/davi-takayama"
                            className={classNames({
                                [s.lista__item__link]: true,
                            })}>
                            <GitHubIcon /> | davi-takayama
                        </a>
                    </li>
                    <li className={classNames({
                        [s.lista__item]: true,

                    })}>
                        <a href="https://www.linkedin.com/in/davi-takayama-2bb81a233/"
                            className={classNames({
                                [s.lista__item__link]: true,
                            })}
                        >
                            <LinkedInIcon /> | davi takayama
                        </a>
                    </li>
                    <li className={classNames({
                        [s.lista__item]: true,

                    })}>
                        <EmailIcon /> | davi.takayama.vaz@gmail.com
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;