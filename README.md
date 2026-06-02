# 🏀 NBA Stats API

API REST para consulta e comparação de estatísticas de jogadores da NBA, desenvolvida como projeto de portfólio com foco em boas práticas de desenvolvimento backend.

---

## 🚀 Tecnologias

- **Node.js** + **TypeScript** — base do projeto
- **Express** — framework HTTP
- **Prisma** — ORM para comunicação com o banco de dados
- **PostgreSQL** — banco de dados relacional
- **Docker** + **Docker Compose** — containerização do ambiente
- **Zod** — validação de dados
- **Winston** — logs estruturados
- **Swagger** — documentação interativa da API

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org) v20+
- [Docker](https://www.docker.com) e Docker Compose

---

## ⚙️ Como rodar localmente

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/nba-stats-api.git
cd nba-stats-api
```

**2. Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Preencha o arquivo `.env` com seus valores.

**3. Suba o banco de dados**

```bash
docker compose up -d postgres
```

**4. Instale as dependências**

```bash
npm install
```

**5. Execute as migrations**

```bash
npx prisma migrate deploy
```

**6. Popule o banco de dados**

```bash
npx ts-node-dev --transpile-only src/scripts/syncTeams.ts
npx ts-node-dev --transpile-only src/scripts/syncPlayers.ts
npx ts-node-dev --transpile-only src/scripts/seedStats.ts
```

**7. Inicie o servidor**

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

---

## 📖 Documentação da API

A documentação interativa está disponível via Swagger em:

```
http://localhost:3333/api/docs
```

### Endpoints disponíveis

| Método | Rota                          | Descrição                          |
| ------ | ----------------------------- | ---------------------------------- |
| GET    | `/api/v1/teams`               | Lista todos os times               |
| GET    | `/api/v1/teams/:id`           | Busca um time pelo ID              |
| GET    | `/api/v1/teams/:id/players`   | Lista jogadores de um time         |
| GET    | `/api/v1/players`             | Lista todos os jogadores           |
| GET    | `/api/v1/players?search=nome` | Busca jogadores por nome           |
| GET    | `/api/v1/players?position=PG` | Filtra jogadores por posição       |
| GET    | `/api/v1/players/:id`         | Busca um jogador pelo ID           |
| GET    | `/api/v1/players/:id/stats`   | Retorna estatísticas de um jogador |

---

## 📊 Dashboard — Power BI

O projeto inclui um dashboard interativo no Power BI com 3 páginas:

- **Overview** — Distribuição de jogadores por conferência e média de pontos por posição
- **Top Players** — Top 10 jogadores por média de pontos por jogo
- **Players Stats** — Tabela completa com estatísticas de todos os jogadores

### Como conectar o Power BI ao banco

1. Abra o arquivo `nba-stats-dashboard.pbix`
2. O Power BI vai pedir para atualizar a conexão
3. Informe o servidor `localhost:5433` e o banco `nba_stats`
4. Use as credenciais: usuário `postgres`, senha `postgres`

---

## 🏗️ Arquitetura

O projeto segue os princípios da **Clean Architecture** com separação clara de responsabilidades:

```
src/
├── modules/
│   └── players/
│       ├── controllers/   # Recebe req/res, chama o service
│       ├── services/      # Lógica de negócio
│       ├── repositories/  # Comunicação com o banco
│       └── routes/        # Definição das rotas
├── shared/
│   ├── middlewares/       # Validação, tratamento de erros
│   └── errors/            # Classes de erro customizadas
├── config/                # Prisma, Logger, Swagger
├── jobs/                  # Scripts de sincronização
└── scripts/               # Seeds e syncs
```

---

## 🔧 Decisões técnicas

**Por que TypeScript?**
Tipagem estática reduz bugs em tempo de desenvolvimento, especialmente ao lidar com objetos complexos retornados pela API da NBA.

**Por que Prisma?**
Geração automática de tipos a partir do schema do banco, facilitando o desenvolvimento com TypeScript e reduzindo erros de acesso ao banco.

**Por que Docker?**
Garante que o ambiente de desenvolvimento seja idêntico em qualquer máquina, eliminando o clássico problema de "funciona na minha máquina".

**Por que Clean Architecture?**
Separação clara de responsabilidades facilita a manutenção e evolução do código. Cada camada tem uma única responsabilidade.

---

## ⚠️ Limitações conhecidas

- As **estatísticas dos jogadores** são simuladas, pois o endpoint de season averages da [balldontlie API](https://balldontlie.io) requer um plano pago. Os dados de times e jogadores são reais.
- O plano gratuito da balldontlie tem rate limit de 5 requisições por minuto, por isso os scripts de sincronização incluem pausas automáticas.
- A API retorna jogadores históricos além dos ativos, podendo haver variações no número de jogadores por time.

---

## 📝 Licença

Este projeto está sob a licença ISC.
