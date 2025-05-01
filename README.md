# SIGEPI

Prototipo da aplicação **SIGEPI** desenvolvida como atividade de estágio para a **SUTIC - UFERSA**.

## Linguagens Utilizadas

- **Frontend**: ReactJS
- **Backend**: NodeJS

## Resumo do Sistema

O **SIGEPI** foi desenvolvido para o cadastro de **EPI's** e **entregas** na **Universidade Federal Rural do Semi-Árido (UFERSA)**. O sistema permite o cadastro, atualização, exclusão e listagem desses dois modelos principais, além da emissão de relatórios com base nos campos de pesquisa utilizados. A identidade visual do sistema foi definida pelas cores da UFERSA, de acordo com o modelo de sua identidade visual.

## Funcionalidades

- **EPI**: Cadastro, atualização, exclusão e listagem dos Equipamentos de Proteção Individual.
- **Entrega**: Cadastro, atualização, exclusão e listagem das entregas de EPIs.
- **Relatórios**: Emissão de relatórios com base nos filtros de pesquisa nas listagens.

## Descrição

- **Autenticação**: Utiliza **JWT** para autenticação de usuários.
- **Segurança**: Senhas são criptografadas com **bcrypt**.
- **Validação de Dados**: A validação dos dados é feita utilizando o protocolo **Yup**.
- **Controle de Acesso**: Apenas **usuários administradores** têm acesso ao sistema.
- **Integração com Banco de Dados UFERSA**: O sistema é integrado ao banco de dados da UFERSA, não sendo necessário cadastro de e-mail, pois as matrículas dos funcionários são usadas. A senha é vinculada ao banco de dados da UFERSA, sendo necessária para validar o empréstimo de EPIs.

## Rodando o Projeto

### Pré-requisitos

- **PostgreSQL** e **Docker** instalados.
- **Yarn** como gerenciador de pacotes.

### Inicializando o Projeto

1. **Instale as dependências**:
   No diretório do projeto, execute o comando:
   ```bash
   yarn install
   ```

2. **Inicializando o Banco de Dados**:
   Para rodar o banco de dados via Docker, execute o comando:
   ```bash
   docker run --name COLOQUESUABASEDEDADOSAQUI -e POSTGRES_PASSWORD=COLOQUESUASENHAAQUI -p 5432:5432 -d postgres
   ```

3. **Backend**:
   - No diretório do backend, abra a IDE e execute:
   ```bash
   yarn sequelize db:migrate
   ```
   Para rodar o backend em modo desenvolvedor, use:
   ```bash
   yarn dev
   ```

4. **Frontend**:
   - Para rodar o frontend em modo desenvolvedor, no diretório do frontend, use:
   ```bash
   yarn start
   ```
