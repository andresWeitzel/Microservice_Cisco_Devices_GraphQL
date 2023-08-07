import { Module } from '@nestjs/common';
import { RatePlansService } from './rate-plans.service';
import { RatePlansResolver } from './rate-plans.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { RatePlansProviders } from './models/rate-plans.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...RatePlansProviders, RatePlansService, RatePlansResolver],
})
export class RatePlansModule {}
