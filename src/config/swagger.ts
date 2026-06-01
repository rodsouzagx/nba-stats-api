const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "NBA Stats API",
    version: "1.0.0",
    description: "API para estatísticas e comparação de jogadores da NBA",
  },
  paths: {
    "/api/v1/teams": {
      get: {
        summary: "Lista todos os times",
        tags: ["Teams"],
        responses: {
          200: { description: "Lista de times retornada com sucesso" },
        },
      },
    },
    "/api/v1/teams/{id}": {
      get: {
        summary: "Busca um time pelo ID",
        tags: ["Teams"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: { description: "Time encontrado" },
          400: { description: "ID inválido" },
          404: { description: "Time não encontrado" },
        },
      },
    },
    "/api/v1/teams/{id}/players": {
      get: {
        summary: "Lista jogadores de um time",
        tags: ["Teams"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: { description: "Lista de jogadores retornada com sucesso" },
          400: { description: "ID inválido" },
          404: { description: "Time não encontrado" },
        },
      },
    },
    "/api/v1/players": {
      get: {
        summary: "Lista todos os jogadores",
        tags: ["Players"],
        parameters: [
          {
            name: "search",
            in: "query",
            required: false,
            schema: { type: "string" },
          },
          {
            name: "position",
            in: "query",
            required: false,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: { description: "Lista de jogadores retornada com sucesso" },
        },
      },
    },
    "/api/v1/players/{id}": {
      get: {
        summary: "Busca um player pelo ID",
        tags: ["Players"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: { description: "Player encontrado" },
          400: { description: "ID inválido" },
          404: { description: "Player não encontrado" },
        },
      },
    },
    "/api/v1/players/{id}/stats": {
      get: {
        summary: "Retorna as estatísticas da temporada de um jogador",
        tags: ["Players"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          200: { description: "Estatísticas do jogador retornadas com sucesso" },
          400: { description: "ID inválido" },
          404: { description: "Jogador não encontrado" },
        },
      },
    },
  },
};

export default swaggerDocument;
