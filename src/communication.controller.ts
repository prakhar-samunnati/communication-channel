import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CommunicationService } from './communication.service';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @MessagePattern({ cmd: 'notify' })
  notify(data: { message: string }) {
    return this.communicationService.notify(data.message);
  }
}

