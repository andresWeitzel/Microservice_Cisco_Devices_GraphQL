/* eslint-disable prettier/prettier */
//External
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Post } from '@nestjs/common';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
import { RatePlansDTO } from '.././models/rate-plans.dto';
//Service
import { CreateRatePlansService } from '.././services/create.service';
//const-vars
let msgResponse: string;
let msgLog: string;

//Check
@Resolver()
@ApiTags('CreateRatePlansResolver')
export class CreateRatePlansResolver {
  constructor(private createPlansService: CreateRatePlansService) {}

  /**
   * @description function for add a rate plan to database 
   * @param {RatePlansDTO} ratePlanObj RatePlansDTO type
   * @returns a response with the rate plan object and status code
   */
  @Mutation(() => RatePlans, { name: 'createRatePlan' })
  @Post('/')
  @ApiOperation({ summary: 'Add a rate plans' })
  async createRatePlan(
    @Args({ name: 'ratePlanObj' }) ratePlanObj: RatePlansDTO,
  ): Promise<RatePlans | string> {
    try {
      msgResponse = null;
      msgLog = null;

      // --- start with database operations ---
      return await this.createPlansService.create(ratePlanObj);
      // --- end with database operations ---
    } catch (error) {
      msgResponse = 'ERROR in createRatePlan function for CreateRatePlansResolver class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
