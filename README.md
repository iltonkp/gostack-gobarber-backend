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

# ✍️ Como Utilizar

- Clone API

```sh
git clone https://github.com/iltonkp/gostack-gobarber-backend.git
```

- Instalando Dependências

```sh
yarn
```

- Configurando Banco de Dados

```sh
cp ormconfig.example.json ormconfig.json
```

```
{
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
}
```

- Executando Migrations

```sh
yarn typeorm migrations:run
```

- Executando Testes

```sh
yarn test
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
- [ ] Utilizar Amazon SES para envios de e-mails em ambiente de Produção;
- [ ] O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócio**

- [x] O link enviado por e-mail para resetar senha, deve expirar em 2 horas;
- [ ] O usuário precisa confirmar a nova senha ao resetar sua senha;

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
- [ ] O prestador deve receber uma notificação sempre que houver um novo agendamento;
- [ ] O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais**

- [ ] Os agendamentos do prestador no dia devem ser armazenados em cache;
- [ ] As notificações do prestador devem ser armazenadas no MongoDB;
- [ ] As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negócio**

- [ ] A notificação deve ter um status de lida e não-lida para que o prestador possa controlar;

### Agendamento de Serviços

**Requisitos Funcionais**

- [x] O usuário deve poder listar todos os prestadores de serviço cadastrado;
- [x] O usuário deve poder listar os dias de um mês com pelo menos um horário disponível para o prestador de serviços selecionado;
- [x] O usuário deve poder listar horários disponíveis em um dia específico para o prestador de serviçoes selecionado;
- [x] O usuário deve poder realizar um novo agendamento com um prestador de serviços;

**Requisitos Não Funcionais**

- [ ] A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio**

- [x] Cada agendamento deve durar 1 hora exatamente;
- [x] Os agendamentos devem estar disponíveis ente 8h as 18h (primeiro as 8h, último as 17h);
- [x] O usuário não pode agendar um horário já ocupado;
- [x] O usuário não pode agendar um horário que já passou;
- [x] O usuário não pode agendar um serviço consigo mesmo;
