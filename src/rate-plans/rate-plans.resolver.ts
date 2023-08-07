/* eslint-disable prettier/prettier */
import { Query, Resolver } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RatePlansService } from './rate-plans.service';
import { RatePlans } from './models/rate-plans.entity';
import { Get, Query as query } from '@nestjs/common';

@Resolver()
@ApiTags('RatePlansResolver')
export class RatePlansResolver {
  constructor(private ratePlansService: RatePlansService) {}

    /**
     * @description Controller to get a paginated listing of all rate plans
     * @queryParam limit: number
     * @queryParam orderBy: string
     * @queryParam orderAt: string
     * @returns a response with the products paginated list and status code
     */
    @Get('/list')
    @ApiOperation({ summary: 'Get all paginated rate plans with all properties' })
    @Query((returns)=> [RatePlans])
    async getAllRatePlans(
      @query('limit') limit: number,
      @query('orderBy') orderBy: string,
      @query('orderAt') orderAt: string,
    ): Promise<RatePlans[]> {
      try {
        return await this.ratePlansService.getAllRatePlans(limit, orderBy, orderAt);
      } catch (error) {
        console.log(`Error in getAllRatePlans controller. Caused by ${error}`);
      }
    }

}
