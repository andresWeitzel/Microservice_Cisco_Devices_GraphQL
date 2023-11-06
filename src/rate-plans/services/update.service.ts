/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
import { RatePlansDTO } from '.././models/rate-plans.dto';
//Helpers
import { validateObject } from '.././helpers/models/validateObject';
//vars
let checkObj: any;
let updatedRatePlan: any;
let msgResponse: string;
let msgLog: string;
/**
 * @description Rate plants service for all crud operations
 * @param {Object} event Object type
 */
@Injectable()
export class UpdateRatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}

  /**
   * @description Service to update and save a rate plan
   * @param {number} inputId number type
   * @param {RatePlansDTO} ratePlan RatePlansDTO type
   * @returns an object with the ratePlan
   */
  async update(
    inputId: number,
    ratePlan: RatePlansDTO,
  ): Promise<RatePlans | RatePlansDTO | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //-- start with validation object  ---
      checkObj = await validateObject(ratePlan);
      if (checkObj.length) {
        return checkObj;
      }
      //-- end with validation object  ---

      //-- start with database operation ---
      updatedRatePlan = await this.ratePlansRepository.update(inputId, ratePlan);

           if (updatedRatePlan != (null || undefined)) {
        return ratePlan;
      }

      //-- end with database operation ---
    } catch (error) {
      msgResponse = 'ERROR in update function for UpdateRatePlansService class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}