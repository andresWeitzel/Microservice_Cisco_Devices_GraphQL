/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
//Enums
import { paginationNameValueError } from '.././enums/pagination/errors';
//Helpers
import { checkOrderAt, checkOrderBy } from '.././helpers/pagination/rate-plans';
//const
const ORDER_BY_NAME_VALUE_ERROR =
  paginationNameValueError.ORDER_BY_NAME_VALUE_ERROR;
const ORDER_AT_NAME_VALUE_ERROR =
  paginationNameValueError.ORDER_AT_NAME_VALUE_ERROR;
//vars
let ratePlansList: RatePlans[];
let ratePlanObj: RatePlans;
let msgResponse: string;
let msgLog: string;
//Pagination
let pageSize: number;
let pageNro: number;
let orderBy: string;
let orderAt: string;
/**
 * @description Rate plants service for all crud operations
 * @param {Object} event Object type
 */
@Injectable()
export class GetByIdRatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}

  /**
   * @description Service to get a rate plans
   * @param {number} inputId number type
   * @returns an object with the products paginated list
   */
  async getById(inputId: number): Promise<RatePlans | string> {
    try {
      msgResponse = null;
      msgLog = null;

      // --- start with database operations ---
      inputId = (inputId == (null || undefined || 0) ? 1 : inputId) || 1;

      ratePlanObj = await this.ratePlansRepository.findOne({
        where: {
          id: inputId,
        },
      });
      //--- end with database operations ---

      return ratePlanObj;
    } catch (error) {
      msgResponse = 'ERROR in getById function for GetByIdService class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
