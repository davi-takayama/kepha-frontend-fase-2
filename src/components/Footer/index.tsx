import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classNames from "classnames";
import style from "./Footer.module.scss";
import { Box, Paper } from "@mui/material";
import { useRecoilValue } from "recoil";
import { tema } from "util/states/atom";

function Footer() {
    const modoState = useRecoilValue(tema);
    const contatos = [
        {
            site: "github",
            nome: "davi-takayama",
            url: "https://github.com/davi-takayama",
            icone: <GitHubIcon />
        },
        {
            site: "linkedin",
            nome: "davi takayama",
            url: "https://www.linkedin.com/in/davi-takayama-2bb81a233/",
            icone: <LinkedInIcon />
        },
        {
            site: "email",
            nome: "davi.takayama.vaz@gmail.com",
            url: "mailto:davi.takayama.vaz@gmail.com",
            icone: <EmailIcon />
        }
    ];

    return (
        <Box component={Paper} >
            <footer className={style.body}>

                <p className={style.descricao}>
                    Aplicação web desenvolvida por Davi Gil Brito Vaz Takayama para o desafio da fase 2
                    do projeto “talentus kepha”, da empresa “Kepha - aceleradora de negocios digitais”, seguindo
                    a rota de front-end utilizando o framework react com typescript.
                </p>
                <div className={style.div}>
                    <h2 className={classNames({
                        [style.titulo]: true,
                    })}>
                        Contatos
                    </h2>
                    <ul className={
                        classNames({
                            [style.lista]: true,
                        })}>

                        {
                            // mapeia todos os contatos com seus respectivos icones e links
                            contatos.map(contato => {
                                return (
                                    <li key={contato.site} className={style.lista__item}>
                                        <a href={contato.url}
                                            className={classNames({
                                                [style.lista__item__link]: true,
                                                [style.lista__item__link__light]: !modoState,
                                                [style.lista__item__link__dark]: modoState,
                                            })}
                                        >
                                            {contato.icone} | {contato.nome}
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>
                </div>
            </footer>
        </Box>
    );
}

export default Footer;