import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkCoupon(code: string): { valid: boolean } {
    return { valid: code === 'telekom' };
  }
}
