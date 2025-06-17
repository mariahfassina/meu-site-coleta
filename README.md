# Projeto Integrador - Site da Coleta Seletiva

Este é o repositório do Projeto Integrador, que consiste em um site institucional dinâmico para o programa de Coleta Seletiva. O site foi desenvolvido com Node.js, Express, EJS e possui um painel administrativo simples para edição de conteúdo.

## Funcionalidades
-   Páginas informativas sobre o programa.
-   Conteúdo dinâmico gerenciado por um "banco de dados" `db.json`.
-   Painel administrativo para editar textos e imagens do site.
-   Design responsivo e otimizado para performance.

## Tecnologias Utilizadas
-   **Backend:** Node.js, Express.js
-   **Frontend:** HTML5, CSS3, JavaScript
-   **Template Engine:** EJS (Embedded JavaScript)
-   **Banco de Dados:** LowDB (para um CMS simples baseado em arquivo JSON)
-   **Upload de Arquivos:** Multer
-   **Variáveis de Ambiente:** Dotenv

---

## Publicação / Deploy

O projeto está publicado e disponível para acesso público.

-   **URL de Produção:** [https://site-coleta-seletiva-pi.onrender.com](https://site-coleta-seletiva-pi.onrender.com)

### Configurações da Plataforma (Render.com)

O deploy foi realizado na plataforma **Render.com** utilizando as seguintes configurações para um serviço "Web Service":

-   **Runtime:** Node
-   **Comando de Build:** `npm install`
-   **Comando de Start:** `npm start`
-   **Variáveis de Ambiente (Environment Variables):** As seguintes variáveis precisam ser configuradas na interface da Render para o correto funcionamento da aplicação:
    -   `SESSION_SECRET`: Uma string longa e aleatória para a segurança das sessões.
    -   `ADMIN_USERNAME`: O nome de usuário para acesso ao painel `/admin/login`.
    -   `ADMIN_PASSWORD`: A senha para acesso ao painel `/admin/login`.
    -   `NODE_ENV`: Definido como `production` para otimizações e segurança.

### **Aviso Importante sobre Persistência de Dados**

O sistema de gerenciamento de conteúdo (edição de textos e upload de imagens) escreve diretamente no sistema de arquivos do servidor (`db.json` e `/public/uploads`). A instância gratuita da Render utiliza um **sistema de arquivos efêmero**, o que significa que **quaisquer alterações feitas através do painel de administração serão perdidas sempre que o servidor for reiniciado ou um novo deploy for feito.**

Para uma solução de produção robusta, seria necessário integrar um banco de dados externo (ex: MongoDB Atlas) e um serviço de armazenamento de arquivos (ex: Amazon S3).

---

## Como Rodar Localmente
1.  Clone o repositório: `git clone https://github.com/sua-equipe/projeto-integrador-coleta.git`
2.  Entre na pasta do projeto: `cd projeto-integrador-coleta`
3.  Instale as dependências: `npm install`
4.  Crie um arquivo `.env` na raiz e adicione as variáveis de ambiente mencionadas acima.
5.  Inicie o servidor: `npm start`
6.  Acesse `http://localhost:3000` no seu navegador.