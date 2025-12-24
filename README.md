# Hora do Dia Dinâmico

> Aplicação web que interage com o relógio do sistema para alterar o tema visual (imagem e cores) automaticamente.

Este projeto utiliza o objeto `Date` do JavaScript para capturar a hora atual do usuário. Com base no horário, o site adapta sua interface para refletir o período do dia (Manhã, Tarde, Noite ou Madrugada), alterando a imagem de destaque e a cor de fundo da página.

## Tecnologias Utilizadas

- **HTML5** (Estrutura e evento `onload`)
- **CSS3** (Estilização de layout e imagens circulares)
- **JavaScript** (Manipulação de Data, Hora e Estilos DOM)

## Funcionalidades

- [x] **Relógio do Sistema:** Captura a hora exata do navegador do usuário usando `new Date().getHours()`.
- [x] **Alteração de Imagem:** Troca dinamicamente o atributo `src` da tag `<img>` para mostrar uma foto correspondente ao período (Manhã, Tarde, Noite).
- [x] **Tema Dinâmico:** Altera a cor de fundo (`document.body.style.background`) para criar uma ambientação visual (Azul claro de manhã, Amarelo à tarde, Azul escuro à noite).
- [x] **Lógica de Intervalos:** Utiliza condicionais (`if/else if`) para definir as 4 faixas de horário (Madrugada, Manhã, Tarde, Noite).

## Aprendizados e Destaques do Código

1. **Objeto Date:** Aprendi a instanciar e extrair informações de tempo do sistema.
2. **Manipulação de Estilos via JS:** Em vez de usar apenas classes CSS fixas, aprendi a injetar cores RGB diretamente pelo JavaScript:
   ```javascript
   document.body.style.background = 'rgba(25, 25, 112, 0.73)';
3. Evento OnLoad: Utilização do evento onload na tag <body> para garantir que a função de verificação rode imediatamente assim que a página terminar de carregar.

## Como rodar o projeto

1. Clone este repositório.
2. Certifique-se de que as imagens (manha.jpg, tarde.jpg, etc.) estejam na mesma pasta.
3. Abra o arquivo index.html no navegador e veja o site se adaptar ao seu horário atual!

Desenvolvido por Fabio durante estudos de JavaScript e DOM.
