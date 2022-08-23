# Sobre o projeto

Pagina montada para o desafio da fase 2 do programa "talentus kepha" seguindo a rota front end

A pagina converte as seguintes medidas:
+ litro -> galao | oncas fluidas
+ metro -> pes | milhas
+ celsius -> fahrenheit | kelvin
+ quilo -> libra | oncas

## Para iniciar o projeto
+ Para que o projeto seja iniciado, é necessaria a instalação do [node](https://nodejs.org/en/). com ele instalado, navegue ate o diretorio do projeto e execute o comando `npm i` no terminal e em seguida o comando `npm start` para iniciar o servidor da pagina. para acessá-la, acesse o endereço http://localhost:3000 no browser.

## Estruturação

+ O projeto foi construido com o framework react, usando os modulos/dependencias [recoil](https://recoiljs.org), [eslint](https://eslint.org), [sass](https://sass-lang.com), [css-modules](https://www.npmjs.com/package/react-css-modules), [classnames](https://www.npmjs.com/package/classnames) e componentes do [mui](https://mui.com/pt/)

+ A pagina é composta por 5 componentes principais (header, footer, historico de conversoes, conversor de medidas e uma tabela), dispostos no arquivo App.tsx com layout em grid.

### Componentes

#### Header
> o header possui apenas o titulo e dois switches que alternam os temas

#### Conversor
> o componente conversor é o principal da pagina, podendo alterar 3 dos 5 componentes da pagina:
>> o proprio conversor, o historico e a tabela.
>
> nele existem 2 seletores (de que e para que converter), um campo de texto para digitar a medida,  um botao para converter e uma tag "p" para exibir o valor da conversao.

#### Historico
> O historico armazena todas as conversoes feitas localmente no browser, tendo as unidades de medida que foram convertidas e o valor da conversao, alem de permitir deletar cada conversao individualmente

#### Tabela
> A tabela mostra os valores de cada unidade de medida em outras unidades. Os valores dela são alterados de acordo com a unidade de medida selecionada no conversor, exibindo dados de temperatura, volume, comprimento e massa.
#### Footer
o footer explica o motivo da criacao do projeto e links para contato

## Pasta "util"
a pasta util contem 5 pastas e 1 arquivo
pasta "funcoes"
>contem funcoes auxiliares para o projeto que foram armazenadas fora dos arquivos de componentes por questoes visuais e de organizacao

pasta "hooks"
>contem os hooks usados nos componentes do projeto que utilizam o recoil

pasta "interfaces"
>contem algumas das interfaces usadas no projeto (com excessao das Props)

pasta "states"
>contem os "atomos" (states) criados com o recoil que sao usados em mais de um componente

pasta "valores"
>armazena os dados usados para a conversao de valores e montagem da tabela e dos itens do historico

arquivo "tema.ts"
>aramazena as paletas de cores usada para construir os temas do projeto, tendo como base a paleta do mui

