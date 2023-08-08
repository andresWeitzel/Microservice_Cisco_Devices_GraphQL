/* eslint-disable prettier/prettier */
//External
import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
//Service
import { RatePlansService } from './rate-plans.service';
//Models
import { RatePlans } from './models/rate-plans.entity';

@Resolver()
@ApiTags('RatePlansResolver')
export class RatePlansResolver {
  constructor(private ratePlansService: RatePlansService) {}

  /**
   * @description Controller to get a paginated listing of all rate plans
   * @param {number} limit number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns a response with the rate plans paginated list and status code
   */
  @Get('/list')
  @ApiOperation({ summary: 'Get all paginated rate plans' })
  @Query(() => [RatePlans], { name: 'getAllRatePlans' })
  async getAllRatePlans(
    @Args({ name: 'limit', type: () => Int }) limit: number | undefined | null,
    @Args({ name: 'orderBy' }) orderBy: string | undefined | null,
    @Args({ name: 'orderAt' }) orderAt: string | undefined | null,
  ): Promise<RatePlans[]> {
    try {
      return await this.ratePlansService.getAllRatePlans(
        limit,
        orderBy,
        orderAt,
      );
    } catch (error) {
      console.log(`Error in getAllRatePlans controller. Caused by ${error}`);
    }
  }

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
  ): Promise<RatePlans> {
    try {
      return await this.ratePlansService.getByIdRatePlans(inputId);
    } catch (error) {
      console.log(`Error in getByIdRatePlans controller. Caused by ${error}`);
    }
  }
}
