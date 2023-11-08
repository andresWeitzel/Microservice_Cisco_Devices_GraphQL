/* eslint-disable prettier/prettier */
//External
import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
//Service
import { GetAllRatePlansService } from '../services/get-all.service';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
//const-vars
let msgResponse: string;
let msgLog: string;

//Check

@Resolver()
@ApiTags('GetAllRatePlansResolver')
export class GetAllRatePlansResolver {
  constructor(private getAllService: GetAllRatePlansService) {}

  /**
   * @description Controller to get a paginated listing of all rate plans
   * @param {number} pageNro number type
   * @param {number} pageSize number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns a response with the rate plans paginated list and status code
   */
  @Get('/list')
  @ApiOperation({ summary: 'Get all paginated rate plans' })
  @Query(() => [RatePlans], { name: 'getAllRatePlans' })
  async getAllRatePlans(
    @Args({ name: 'pageNro', type: () => Int }) pageNro: number,
    @Args({ name: 'pageSize', type: () => Int }) pageSize: number,
    @Args({ name: 'orderBy' }) orderBy: string,
    @Args({ name: 'orderAt' }) orderAt: string,
  ): Promise<RatePlans[] | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //--- start with database operations ----
      return await this.getAllService.getAll(
        pageNro,
        pageSize,
        orderBy,
        orderAt,
      );
      //--- end with database operations ----
    } catch (error) {
      msgResponse = 'ERROR in getAllRatePlans function for GetAllRatePlansResolver class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }

}