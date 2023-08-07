//External
import { Module } from '@nestjs/common';
//Service
import { RatePlansService } from './rate-plans.service';
//Resolvers
import { RatePlansResolver } from './rate-plans.resolver';
//Modules
import { DatabaseModule } from 'src/database/database.module';
//Providers
import { RatePlansProviders } from './models/rate-plans.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...RatePlansProviders, RatePlansService, RatePlansResolver],
})
export class RatePlansModule {}
