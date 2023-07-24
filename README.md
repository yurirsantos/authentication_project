# Authentication Project

O projeto Authentication é uma aplicação web que oferece recursos de autenticação e gerenciamento de usuários. Este README fornecerá todas as informações necessárias para executar e entender o funcionamento do projeto.

## Objetivo

O objetivo do projeto "Authentication Project" é criar um processo de autenticação de usuário em um sistema, oferecendo recursos para gerenciamento de usuários.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Docker

## Executando o projeto

Para executar o projeto usando o Docker, siga os passos abaixo:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório raiz do projeto.

Agora, execute o seguinte comando:

<code>docker-compose up --build</code>

Esse comando irá compilar e iniciar os containers necessários para executar o projeto.

## Rotas disponíveis

A aplicação possui as seguintes rotas (endpoints):

1. `/auth`: Rota responsável pelo processo de autenticação do usuário.
2. `/contacts`: Rota para gerenciamento de contatos do usuário.
3. `/users`: Rota para manipulação de informações de usuários.
4. `/passwordChangeCodes`: Rota para a geração e utilização de códigos de alteração de senha.

Essas são as principais rotas disponíveis no projeto, cada uma com suas respectivas funcionalidades.
