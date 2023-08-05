import { Module } from '@nestjs/common';
import { RatePlansService } from './rate-plans.service';
import { RatePlansResolver } from './rate-plans.resolver';

@Module({
  providers: [RatePlansService, RatePlansResolver]
})
export class RatePlansModule {}
