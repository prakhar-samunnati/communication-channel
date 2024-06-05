import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationService {
  notify(message: string): string {
    // In a real-world application, you would send an email, SMS, etc.
    console.log(`Notification sent: ${message}`);
    return `Notification sent: ${message}`;
  }
}



