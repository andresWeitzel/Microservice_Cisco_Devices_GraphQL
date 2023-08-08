/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from './models/rate-plans.entity';
//Enums

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
  /**
   * @description Service to get a paginated listing of all rate plans
   * @param {number} limit number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns an object with the products paginated list
   */
  async getAllRatePlans(
    limit: number | undefined | null,
    orderBy: string | undefined | null,
    orderAt: string | undefined | null,
  ): Promise<RatePlans[]> {
    try {
      limit = limit == (null || undefined) ? 20 : limit;
      orderBy = orderBy == (null || undefined || '') ? 'id' : orderBy;
      orderAt = orderAt == (null || undefined || '') ? 'ASC' : orderAt;
      return await this.ratePlansRepository.find({
        order: {
          [orderBy]: orderAt,
        },
        take: limit,
      });
    } catch (error) {
      console.log(`Error in getAllRatePlans service. Caused by ${error}`);
    }
  }

  /**
   * @description Service to get a rate plans
   * @param {number} inputId number type
   * @returns an object with the products paginated list
   */
  async getByIdRatePlans(inputId: number): Promise<RatePlans> {
    try {
      inputId = inputId == (null || undefined || 0) ? 1 : inputId;

      return await this.ratePlansRepository.findOne({
        where: {
          id: inputId,
        },
      });
    } catch (error) {
      console.log(`Error in getAllRatePlans service. Caused by ${error}`);
    }
  }
}
