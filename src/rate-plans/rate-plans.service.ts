/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from './models/rate-plans.entity';
//Enums
import { Status } from './enums/status';

/**
 * @description Rate plants service for all crud operations
 * @param {Object} event Object type
 */
@Injectable()
export class RatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}
//    /**
//    * @description Service to get a paginated listing of all rate plants
//    * @queryParam limit: number
//    * @queryParam orderBy: string
//    * @queryParam orderAt: string
//    * @returns an object with the products paginated list
//    */
//    async getAllRatePlants(
//     limit: number,
//     orderBy: string,
//     orderAt: string,
//   ): Promise<RatePlants[]> {
//     try {
//       limit = limit == (null || undefined) ? 20 : limit;
//       orderBy = orderBy == (null || undefined || '') ? 'id' : orderBy;
//       orderAt = orderAt == (null || undefined || '') ? 'ASC' : orderAt;
//       return await this.ratePlansRepository.find({
//         order: {
//           [orderBy]: orderAt,
//         },
//         take: limit,
//       });
//     } catch (error) {
//       console.log(`Error in getAllRatePlants service. Caused by ${error}`);
//     }
//   }


  //  async getAllRatePlans(
  // ): Promise<RatePlans[]> {
  //   try {
      
  //     return [{id:1,name:'as',versionId:12,versionPlan:'test',status:Status.ACTIVE, typePlan:'asd', subscriptionCharge:3, numberOfTiers:1, creationDate, updateDate}]
  //   } catch (error) {
  //     console.log(`Error in getAllRatePlans service. Caused by ${error}`);
  //   }
  // }
  async getAllRatePlans(
    ): Promise<any> {
      try {
        
        return [{id:1,name:'as'}];
      } catch (error) {
        console.log(`Error in getAllRatePlans service. Caused by ${error}`);
      }
    }
}
