# 🧪 Mock API + Automated Tests

![Tests](https://github.com/Nayumt99/mock-api/actions/workflows/tests.yml/badge.svg)

Projeto de API mockada com testes automatizados e pipeline de CI/CD usando GitHub Actions.

---

## 📌 Objetivo

Este projeto simula uma API REST para:

- Testes de QA (manual e automatizado)
- Desenvolvimento frontend sem backend real
- Validação de cenários de erro e sucesso
- Demonstração de arquitetura de testes
- Estudo de CI/CD com GitHub Actions

---

## 🏗️ Tecnologias

- Node.js
- Express
- Jest
- GitHub Actions
- Allure Reports

---

## 🚀 Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar mock server

```bash
npm start
```

Servidor disponível em:

```bash
http://localhost:3000
```

## 🔗 Endpoints disponíveis

👤 Usuários

```bash
GET /users
```

## 🔄 Cenários suportados

| Scenario | Status    | Descrição                |
| -------- | --------- | ------------------------ |
| 200      | OK        | Lista de usuários        |
| 404      | Not Found | Usuários não encontrados |
| 500      | Error     | Erro interno simulado    |


Exemplo de uso

```bash
GET /users?scenario=200
GET /users?scenario=404
GET /users?scenario=500
```

## 🧪 Executar testes automatizados

```bash
npm test
```

## 📊 Relatórios de testes (Allure)

Gerar relatório

```bash
npx allure generate allure-results --clean -o allure-report
```

Abrir relatório

```bash
npx allure open allure-report
```

## ⚙️ CI/CD (GitHub Actions)

Este projeto executa automaticamente:

- Instalação de dependências
- Execução dos testes
- Validação de qualidade (quality gate)
- Geração de artefatos de teste

## 📁 Estrutura do projeto

mock-api/
├── mocks/
│   └── users/
├── tests/
├── reports/
├── allure-results/
├── server.js
├── jest.config.js
├── package.json
└── README.md

## 👨‍💻 Autor

Projeto criado para estudo e evolução em QA Automation, arquitetura de testes e CI/CD.
