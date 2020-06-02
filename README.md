<h1  align="center">
	<img    alt="Node"  width="200" height="200"  src="https://res.cloudinary.com/dpeywfgot/image/upload/v1590075702/Node.js_logo_vldaps.svg">
	<br/>
	Gostack GoBarber - Back-End - API
</h1>
<p  align="center">
	<img alt="Node" src="https://img.shields.io/badge/Node-12.16.3-green">
	<img alt="Yarn" src="https://img.shields.io/badge/Yarn-1.22.4-blue">
	<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3.8.3-blue">
</p>

<p  align="center">
	<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/iltonkp/gostack-gobarber-backend.svg">
	<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/iltonkp/gostack-gobarber-backend.svg">
	<img alt="Repository size" src="https://img.shields.io/github/repo-size/iltonkp/gostack-gobarber-backend.svg">
</p>

---

# 💻 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Celebrate](https://github.com/arb/celebrate)
- [Handlebars](https://handlebarsjs.com/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Class-Transformer](https://github.com/typestack/class-transformer)
- [MongoDB](https://www.mongodb.com/)
- [Multer](https://github.com/expressjs/multer)
- [Nodemailer](https://nodemailer.com/about/)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [Mime](https://github.com/broofa/mime)
- [aws-sdk](https://aws.amazon.com/pt/sdk-for-node-js/)
- [ioredis](https://github.com/luin/ioredis)
- [uuidv4](https://www.npmjs.com/package/uuidv4)
- [date-fns](https://date-fns.org/v1.30.1/docs/format)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
- [typeorm](https://typeorm.io/#/)
- [postgres](https://www.postgresql.org/)

# ✍️ Como Utilizar

- Clone API

```sh
git clone https://github.com/iltonkp/gostack-gobarber-backend.git
```

- Instalando Dependências

```sh
yarn
```

- Configurando .env

```sh
cp .env.example .env
```

```
#Application
APP_SECRET=
APP_API_URL=http://localhost:3333
APP_WEB_URL=http://localhost:3000

#Mail
#Options: ethereal | ses
MAIL_DRIVER=ethereal

#AWS Credencials
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

#Storage
#Options: disk | s3
STORAGE_DRIVER=disk

#Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
```

- Configurando Banco de Dados

```sh
cp ormconfig.example.json ormconfig.json
```

```
[
  {
    "name": "default",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "",
    "password": "",
    "database": "gostack_gobarber",
    "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
    "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
  },
  {
    "name": "mongo",
    "type": "mongodb",
    "url": "<url connection mongodb Atlas>",
    "useNewUrlParser": true,
    "synchronize": true,
    "database": "gobarber",
    "useUnifiedTopology": true,
    "entities": ["./src/modules/**/infra/typeorm/schemas/*.ts"]
  }
]

```

- Executando Migrations

```sh
yarn typeorm migrations:run
```

- Executando Testes

```sh
yarn test
```

- Iniciando o Servidor

```sh
yarn dev:server
```

---

# ⌨️ Funcionalidades

### Recuperação de Senha

**Requisitos Funcionais**

- [x] O usuário deve poder recuperar sua senha informando o seu e-mail;
- [x] O usuário deve receber um e-mail com as instruções de recuperação de senha;
- [x] O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**

- [x] Utilizar Ethereal para testar envios de e-mails em ambiente de dev;
- [x] Utilizar Amazon SES para envios de e-mails em ambiente de Produção;
- [x] O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócio**

- [x] O link enviado por e-mail para resetar senha, deve expirar em 2 horas;
- [x] O usuário precisa confirmar a nova senha ao resetar sua senha;

### Atualização do Perfil

**Requisitos Funcionais**

- [x] O usuário deve poder atualizar seu nome, e-mail e senha;

**Regras de Negócio**

- [x] O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- [x] Para atualizar sua senha, o usuário deve informar a senha antiga;
- [x] Para atualizar sua senha, o usuário precisa confirmar a nova senha;

### Painel do Prestador

**Requisitos Funcionais**

- [x] O usuário deve poder listar seus agendamentos de um dia específico;
- [x] O prestador deve receber uma notificação sempre que houver um novo agendamento;
- [x] O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais**

- [x] Os agendamentos do prestador no dia devem ser armazenados em cache;
- [x] As notificações do prestador devem ser armazenadas no MongoDB;
- [ ] As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negócio**

- [x] A notificação deve ter um status de lida e não-lida para que o prestador possa controlar;

### Agendamento de Serviços

**Requisitos Funcionais**

- [x] O usuário deve poder listar todos os prestadores de serviço cadastrado;
- [x] O usuário deve poder listar os dias de um mês com pelo menos um horário disponível para o prestador de serviços selecionado;
- [x] O usuário deve poder listar horários disponíveis em um dia específico para o prestador de serviçoes selecionado;
- [x] O usuário deve poder realizar um novo agendamento com um prestador de serviços;

**Requisitos Não Funcionais**

- [x] A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio**

- [x] Cada agendamento deve durar 1 hora exatamente;
- [x] Os agendamentos devem estar disponíveis ente 8h as 18h (primeiro as 8h, último as 17h);
- [x] O usuário não pode agendar um horário já ocupado;
- [x] O usuário não pode agendar um horário que já passou;
- [x] O usuário não pode agendar um serviço consigo mesmo;
