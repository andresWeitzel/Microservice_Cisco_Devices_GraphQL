/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from '../models/rate-plans.entity';
import { RatePlansDTO } from '../models/rate-plans.dto';
//Enums
//Helpers
import { validateObject } from '../helpers/models/validateObject';
//Const-vars
let checkObj: any;
let newRatePlan: any;
let msgResponse: string;
let msgLog: string;

/**
 * @description Class service for create a rate plan
 * @param {Object} event Object type
 */
@Injectable()
export class CreateRatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}

  /**
   * @description function to create and save a rate plan
   * @param {RatePlansDTO} ratePlan RatePlansDTO type
   * @returns an object with the ratePlan
   */
  async create(ratePlan: RatePlansDTO): Promise<RatePlans | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //-- start with validation object  ---
      checkObj = await validateObject(ratePlan);
      if (checkObj.length) {
        return checkObj;
      }
      //-- end with validation object  ---
      newRatePlan = this.ratePlansRepository.create(ratePlan);

      return await this.ratePlansRepository.save(newRatePlan);
    } catch (error) {
      msgResponse = 'ERROR in create function for CreateRatePlansService class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
