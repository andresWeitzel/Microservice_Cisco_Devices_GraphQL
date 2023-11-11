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
export class GetAllRatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}

  /**
   * @description Service to get a paginated listing of all rate plans
   * @param {number} pageNroParam number type
   * @param {number} pageSizeParam number type
   * @param {string} orderByParam string type
   * @param {string} orderAtParam string type
   * @returns an object with the products paginated list
   */
  async getAll(
    pageNroParam: number,
    pageSizeParam: number,
    orderByParam: string,
    orderAtParam: string,
  ): Promise<RatePlans[] | string> {
    try {
      //pagination
      pageSize = 20;
      pageNro = 0;
      orderBy = 'id';
      orderAt = 'ASC';
      msgResponse = null;
      msgLog = null;

      //-- start with pagination  ---
      pageNro = pageNroParam != (null && undefined) ? pageNroParam : pageNro;
      pageSize =
        pageSizeParam != (null && undefined) ? pageSizeParam : pageSize;
      orderBy = orderByParam != (null && undefined) ? orderByParam : orderBy;
      orderAt = orderAtParam != (null && undefined) ? orderAtParam : orderAt;

      orderBy = await checkOrderBy(orderBy);

      if (orderBy == (null || undefined)) {
        return ORDER_BY_NAME_VALUE_ERROR;
      }

      orderAt = await checkOrderAt(orderAt);

      if (orderAt == (undefined || null)) {
        return ORDER_AT_NAME_VALUE_ERROR;
      }

      //-- end with pagination  ---

      // --- start with database operations ---
      ratePlansList = await this.ratePlansRepository.find({
        order: {
          [orderBy]: orderAt,
        },
        skip: pageNro,
        take: pageSize,
      });
      //--- end with database operations ---

      return ratePlansList;
    } catch (error) {
      msgResponse =
        'ERROR in get-all function for GetAllRatePlansService class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
