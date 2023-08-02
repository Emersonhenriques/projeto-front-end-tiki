# Teste Front-End Tiki

Teste técnico para vaga de estagiário front-end na empresa Tiki.

## Instruções

Este projeto foi inicializado com Create React App .

Scripts Disponíveis
No diretório do projeto, você pode executar:

yarn start
Executa o aplicativo no modo de desenvolvimento.
Abra http://localhost:3000 para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.
Você também pode ver erros de lint no console.

yarn test
Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre como executar testes para obter mais informações.

yarn build
Cria o aplicativo para produção na buildpasta.
Ele empacota corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre implantação para obter mais informações.

yarn eject
Nota: esta é uma operação unidirecional. Uma vez que você eject, você não pode voltar atrás!

Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, poderá fazê-lo ejecta qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto, ejectainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto você está por conta própria.

Você não precisa nunca usar eject. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para ela.

Para o Carrosel funcionar corretamente execute os seguintes comandos no diretório do projeto:

npm install react-slick --save
ou
yarn add react-slick

e também
npm install slick-carousel --save
ou
yarn add slick-carousel

## Desafios/Problemas

Tive muitas dificuldades no componente de carrossel, tentei fazer ele em Js puro mas não deu certo, após pesquisar consegui fazer ele usando uma lib chamada react-slick.

Tive dificuldades também na estilização geral do projeto a fim de atender fielmente o protótipo.

## Melhorias

- Melhorar todo o css para tornar o site responsivo.

- Validações no formulário.

- Poderia ser visto também a possibilidade do uso de Styled-components ou SCSS para facilitar um pouco toda parte de estilização da aplicação.
