//External
import { Module } from "@nestjs/common";
//Service
import { RatePlansService } from "./rate-plans.service";
//Resolvers
import { RatePlansResolver } from "./rate-plans.resolver";
//Modules
import { DatabaseModule } from "src/database/database.module";
//Providers
import { RatePlansProviders } from "./rate-plans.providers";
import { CreateRatePlansService } from "./services/create.service";
import { CreateRatePlansResolver } from "./resolvers/create.resolver";
import { UpdateRatePlansService } from "./services/update.service";
import { UpdateRatePlansResolver } from "./resolvers/update.resolver";
import { GetAllRatePlansService } from "./services/get-all.service";
import { GetAllRatePlansResolver } from "./resolvers/get-all.resolver";

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
    //Next for refactor
    RatePlansService,
    RatePlansResolver,
  ],
})
export class RatePlansModule {}
