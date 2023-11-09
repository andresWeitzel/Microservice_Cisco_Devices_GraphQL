/* eslint-disable prettier/prettier */
//External
import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
//Service
import { GetByIdRatePlansService } from '../services/get-by-id.service';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
//const-vars
let msgResponse: string;
let msgLog: string;

//Check

@Resolver()
@ApiTags('GetByIdRatePlansResolver')
export class GetByIdRatePlansResolver {
  constructor(private getByIdRatePlansService: GetByIdRatePlansService) {}

  /**
   * @description Controller to get a rate plan according to your id
   
      * @param {number} inputId number type
   * @returns a response with the rate plan and status code
   */
  @Get('/id/:inputId')
  @ApiOperation({ summary: 'Get a rate plan according to your id' })
  @Query(() => RatePlans, { name: 'getByIdRatePlans' })
  async getByIdRatePlans(
    @Args({ name: 'inputId', type: () => Int }) inputId: number,
  ): Promise<RatePlans | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //--- start with database operations ----
      return await this.getByIdRatePlansService.getById(inputId);
      //--- end with database operations ----
    } catch (error) {
      msgResponse = 'ERROR in getByIdRatePlans function resolver';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
