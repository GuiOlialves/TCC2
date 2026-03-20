# 🐾 VetControl

Sistema web de gestão para clínicas veterinárias desenvolvido como TCC na ETEC Irmã Agostina.

![VetControl Dashboard](./screenshots/financeiro.png)

---

## 📋 Sobre o Projeto

O VetControl nasceu de um problema real: clínicas veterinárias que dependem de processos manuais para gerenciar consultas, estoque e finanças. O sistema centraliza tudo em uma única plataforma — do agendamento de consultas ao dashboard financeiro com gráficos em tempo real.

Desenvolvido do zero por uma equipe de 3 pessoas, o projeto foi apresentado em banca na ETEC Irmã Agostina em 2025.

---

## ✨ Funcionalidades

- **Gestão de Pacientes** — cadastro completo de pets com espécie, raça, tutor, vacinas, alergias e histórico de consultas
- **Agenda Dinâmica** — kanban com status em tempo real: Aguardando → Em Atendimento → Finalizado
- **Agendamento** — marcação de consultas com data, horário, tipo e médico responsável
- **Gerenciamento de Estoque** — controle de itens por categoria, preço unitário e quantidade
- **Painel Financeiro** — cards com faturamento, total de consultas e valor em estoque, com gráfico de distribuição
- **Relatórios e Análises** — gráficos de consultas por tipo e distribuição de pets por espécie
- **Autenticação** — login com perfil de usuário (ex: Veterinário)

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Back-end | Node.js + Express |
| Front-end | EJS + CSS puro |
| Banco de dados | MongoDB + Mongoose |
| Autenticação | Sessão/JWT |

---

## 🖥️ Screenshots

### Lista de Pacientes
![Lista de Pacientes](./screenshots/lista-pets.png)

### Perfil do Pet e Agendamento
![Perfil do Pet](./screenshots/perfil-pet.png)

### Agenda — Kanban de Consultas
![Agenda](./screenshots/agenda.png)

### Gerenciamento de Estoque
![Estoque](./screenshots/estoque.png)

### Painel Financeiro
![Financeiro](./screenshots/financeiro.png)

### Relatórios e Análises
![Relatórios](./screenshots/relatorios.png)

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) rodando localmente ou URI do MongoDB Atlas


---

## 👥 Equipe

Desenvolvido por Guilherme Oliveira Alves e equipe como Trabalho de Conclusão de Curso — Técnico em Desenvolvimento de Sistemas, ETEC Irmã Agostina (2025).

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.
