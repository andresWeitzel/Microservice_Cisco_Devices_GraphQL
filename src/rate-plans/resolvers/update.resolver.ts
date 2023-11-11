/* eslint-disable prettier/prettier */
//External
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Patch } from '@nestjs/common';
//Service
import { UpdateRatePlansService } from '../services/update.service';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
import { RatePlansDTO } from '.././models/rate-plans.dto';
//Vars
let msgResponse: string;
let msgLog: string;

@Resolver()
@ApiTags('UpdateRatePlansResolver')
export class UpdateRatePlansResolver {
  constructor(private updateRatePlansService: UpdateRatePlansService) {}

  /**
   * @description Controller to update a rate plan
   * @param {number} id number type
   * @param {RatePlansDTO} ratePlanObj RatePlansDTO type
   * @returns a response with the rate plan object and status code
   */
  @Mutation(() => RatePlans, { name: 'updateRatePlan' })
  @Patch('/:id')
  @ApiOperation({ summary: 'Update a rate plans' })
  async updateRatePlan(
    @Args({ name: 'id' }) id: number,
    @Args({ name: 'ratePlanObj' }) ratePlanObj: RatePlansDTO,
  ): Promise<RatePlans | RatePlansDTO | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //--- start with database operations ----
      return await this.updateRatePlansService.update(id, ratePlanObj);
      //--- end with database operations ----
    } catch (error) {
      msgResponse = 'ERROR in updateRatePlan function resolver';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
