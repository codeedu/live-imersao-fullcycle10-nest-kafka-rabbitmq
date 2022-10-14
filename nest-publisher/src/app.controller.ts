import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Producer } from 'kafkajs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private amqpConnection: AmqpConnection,
    @Inject('KAFKA_PRODUCER') private kafkaProducer: Producer,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('rabbit-publish')
  publisherRabbitMQ(@Body() body) {
    this.amqpConnection.publish('amq.direct', 'pagamentos', body);
    console.log('mensagem publicada');
    return { message: 'mensagem publicada' };
  }

  @Post('kafka-publish')
  async publisherKafka(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'pagamentos',
      messages: [{ value: JSON.stringify(body) }],
    });
    console.log('mensagem publicada');
    return { message: 'mensagem publicada' };
  }
}
