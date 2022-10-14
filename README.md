![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Sobre o repositório
Esse repositório contém o código-fonte ministrado na aula Integração entre sistemas: Kafka vs RabbitMQ: [https://www.youtube.com/watch?v=yBwaiBz9-UE](https://www.youtube.com/watch?v=yBwaiBz9-UE)

## Rodar as aplicações

Rode o RabbitMQ e Kafka com Docker Compose. Use dois terminais diferentes para ver os logs de cada um sendo executados.

```bash
docker compose -f docker-compose.rabbit.yaml up
```

```bash
docker compose -f docker-compose.kafka.yaml up
```


Existem 2 aplicações WEB no projeto:
 * nest-consumer - consumidor de mensagens do RabbitMQ e Kafka
 * nest-publisher - publicador de mensagens do RabbitMQ e Kafka

Entre em cada um delas e rode os comandos:

```bash
npm install
npm run start:dev # levantar o serviço das aplicações
```


Use o arquivo `nest-publisher/api.http` para testar a publicação usando a extensão Rest Client do VSCode ou outra ferramenta para brincar com o HTTP.

Verifique os logs no terminal do `nest-consumer` para ver se as mensagens foram consumidas