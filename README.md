# Blog com Painel Admin

## Descrição

Este é um projeto completo de um blog com painel administrativo, desenvolvido com **Node.js**, **Express**, **Sequelize** e **MySQL** no backend, e **Next.js** no frontend. O sistema permite o cadastro, autenticação de usuários e a criação de posts.

## Tecnologias Utilizadas

### Backend:
- Node.js
- Express
- Sequelize
- MySQL
- Bcrypt.js (para hashing de senhas)
- JSON Web Token (JWT) para autenticação
- CORS para segurança

### Frontend:
- Next.js
- Axios para requisições HTTP
- React Toastify para notificações
- NextAuth para autenticação
- CSS Modules para estilização

## Estrutura do Projeto

```
blog-admin/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── database.js
│   │   ├── server.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── app/
│   │   ├── auth/
│   │   ├── admin/
│   │   ├── components/
│   ├── styles/
│   ├── .env.local
│   ├── package.json
│
├── README.md
├── .gitignore
```

## Configuração do Ambiente

### Backend:
1. Instale as dependências:
   ```bash
   cd backend
   npm install
   ```
2. Configure o banco de dados no arquivo `.env`:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=senha
   DB_NAME=blog
   JWT_SECRET=seu_segredo_super_secreto
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```

### Frontend:
1. Instale as dependências:
   ```bash
   cd frontend
   npm install
   ```
2. Configure a URL da API no arquivo `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
3. Inicie o frontend:
   ```bash
   npm run dev
   ```

## Funcionalidades
- Cadastro e login de usuários com JWT
- Criação e listagem de posts
- Painel administrativo para gerenciar postagens

## Contato
Para dúvidas ou sugestões, entre em contato com o desenvolvedor! 🚀
