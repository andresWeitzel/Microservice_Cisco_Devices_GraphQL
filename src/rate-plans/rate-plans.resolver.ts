/* eslint-disable prettier/prettier */
//External
import { Query, Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get, Patch, Post } from '@nestjs/common';
//Service
import { RatePlansService } from './rate-plans.service';
//Models
import { RatePlans } from './models/rate-plans.entity';
import { RatePlansDTO } from './models/rate-plans.dto';

@Resolver()
@ApiTags('RatePlansResolver')
export class RatePlansResolver {
  constructor(private ratePlansService: RatePlansService) {}

  /**
   * @description Controller to add a rate plan
   * @param {RatePlansDTO} ratePlanObj RatePlansDTO type
   * @returns a response with the rate plan object and status code
   */
  @Mutation(() => RatePlans, { name: 'createRatePlan' })
  @Post('/')
  @ApiOperation({ summary: 'Add a rate plans' })
  async createRatePlan(
    @Args({ name: 'ratePlanObj' }) ratePlanObj: RatePlansDTO,
  ): Promise<RatePlans> {
    try {
      return await this.ratePlansService.createRatePlan(ratePlanObj);
    } catch (error) {
      console.log(`Error in createRatePlan controller. Caused by ${error}`);
    }
  }

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
  ): Promise<RatePlans> {
    try {
      return await this.ratePlansService.updateRatePlan(id, ratePlanObj);
    } catch (error) {
      console.log(`Error in updateRatePlan controller. Caused by ${error}`);
    }
  }

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
  ): Promise<RatePlans[]> {
    try {
      return await this.ratePlansService.getAllRatePlans(
        pageNro,
        pageSize,
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
