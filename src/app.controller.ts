import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Coupon } from './interfaces/coupon.interface';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('coupon')
  @ApiBody({ type: Coupon })
  checkCoupon(@Body() data: Coupon): { valid: boolean } {
    return this.appService.checkCoupon(data.code);
  }
}
