//External
import { Module } from '@nestjs/common';
//Modules
import { DatabaseModule } from 'src/database/database.module';
//Providers
import { RatePlansProviders } from './rate-plans.providers';
import { CreateRatePlansService } from './services/create.service';
import { CreateRatePlansResolver } from './resolvers/create.resolver';
import { UpdateRatePlansService } from './services/update.service';
import { UpdateRatePlansResolver } from './resolvers/update.resolver';
import { GetAllRatePlansService } from './services/get-all.service';
import { GetAllRatePlansResolver } from './resolvers/get-all.resolver';
import { GetByIdRatePlansService } from './services/get-by-id.service';
import { GetByIdRatePlansResolver } from './resolvers/get-by-id.resolver';
import { DeleteRatePlansService } from './services/delete.service';
import { DeleteRatePlansResolver } from './resolvers/delete.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    //Providers
    ...RatePlansProviders,
    //CreateRatePlan
    CreateRatePlansService,
    CreateRatePlansResolver,
    //UpdateRatePlan
    UpdateRatePlansService,
    UpdateRatePlansResolver,
    //GetAllRatePlan
    GetAllRatePlansService,
    GetAllRatePlansResolver,
    //GetByIdRatePlan
    GetByIdRatePlansService,
    GetByIdRatePlansResolver,
    //DeleteRatePlan
    DeleteRatePlansService,
    DeleteRatePlansResolver
  ],
})
export class RatePlansModule {}
