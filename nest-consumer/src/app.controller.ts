import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @MessagePattern('pagamentos')
  consumerKafka(@Payload() message: KafkaMessage) {
    console.log('mensagem recebida');
    console.log(message);
  }
}
