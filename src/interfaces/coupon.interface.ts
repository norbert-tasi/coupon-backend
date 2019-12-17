import { ApiProperty } from '@nestjs/swagger';

export class Coupon {
    @ApiProperty()
    code: string;
}
