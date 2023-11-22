/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from '../models/rate-plans.entity';
//Const-vars
let deletedRatePlan: any;
let ratePlanOld:any;
let msgResponse: string;
let msgLog: string;

/**
 * @description Class service for delete a rate plan
 * @param {Object} event Object type
 */
@Injectable()
export class DeleteRatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}

  /**
   * @description function to delete a rate plan
   * @param {number} inputId number type
   * @returns an object with the ratePlan
   */
  async delete(inputId: number): Promise<RatePlans | string> {
    try {
      msgResponse = null;
      msgLog = null;

      ratePlanOld = this.ratePlansRepository.findOne(inputId);

      deletedRatePlan = this.ratePlansRepository.remove(ratePlanOld);

      //https://github.com/typeorm/typeorm/issues/7024

      return deletedRatePlan;

    } catch (error) {
      msgResponse = 'ERROR in delete function for DeleteRatePlansService class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
