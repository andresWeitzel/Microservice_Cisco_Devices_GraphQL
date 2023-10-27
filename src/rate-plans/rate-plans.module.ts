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

@Module({
  imports: [DatabaseModule],
  providers: [
    //Providers
    ...RatePlansProviders,
    //createRatePlan
    CreateRatePlansService,
    CreateRatePlansResolver,
    //Next for refactor
    RatePlansService,
    RatePlansResolver,
  ],
})
export class RatePlansModule {}
