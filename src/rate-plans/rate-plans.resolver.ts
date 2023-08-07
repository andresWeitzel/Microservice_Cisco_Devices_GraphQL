/* eslint-disable prettier/prettier */
import { Query, Resolver } from '@nestjs/graphql';
import { ApiTags } from '@nestjs/swagger';
import { RatePlansService } from './rate-plans.service';
import { RatePlans } from './models/rate-plans.entity';

@Resolver()
@ApiTags('RatePlansResolver')
export class RatePlansResolver {
  constructor(private ratePlansService: RatePlansService) {}

  //   /**
  //    * @description Controller to get a paginated listing of all products
  //    * @queryParam limit: number
  //    * @queryParam orderBy: string
  //    * @queryParam orderAt: string
  //    * @returns a response with the products paginated list and status code
  //    */
  //   @Get('/list')
  //   @ApiOperation({ summary: 'Get all paginated products with all properties' })
  //   async getAllProducts(
  //     @Query('limit') limit: number,
  //     @Query('orderBy') orderBy: string,
  //     @Query('orderAt') orderAt: string,
  //   ): Promise<Product[]> {
  //     try {
  //       return await this.productsService.getAllProducts(limit, orderBy, orderAt);
  //     } catch (error) {
  //       console.log(`Error in getAllProducts controller. Caused by ${error}`);
  //     }
  //   }

  @Query((returns)=> [RatePlans])
  getAllRatePlans() {
    return this.ratePlansService.getAllRatePlans();
  }
}
