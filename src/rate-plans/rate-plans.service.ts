/* eslint-disable prettier/prettier */
//External
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
//Models
import { RatePlans } from './models/rate-plans.entity';
import { RatePlansDTO } from './models/rate-plans.dto';
//Enums
//Helpers
import { validateObject } from './helpers/models/validateObject';
import { checkOrderBy } from './helpers/pagination/rate-plans';
//Const-vars
let checkObj: any;
let ratePlansList: RatePlans[];
let ratePlanObj: RatePlans;
let newRatePlan: any;
let updateRatePlan: any;
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
export class RatePlansService {
  constructor(
    @Inject('RATE_PLANS_REPOSITORY')
    private ratePlansRepository: Repository<RatePlans>,
  ) {}

  /**
   * @description Service to create and save a rate plan
   * @param {RatePlansDTO} ratePlan RatePlansDTO type
   * @returns an object with the ratePlan
   */
  async createRatePlan(ratePlan: RatePlansDTO): Promise<RatePlans | string> {
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
      msgResponse = 'ERROR in createRatePlan function service';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }

  /**
   * @description Service to update and save a rate plan
   * @param {number} inputId number type
   * @param {RatePlansDTO} ratePlan RatePlansDTO type
   * @returns an object with the ratePlan
   */
  async updateRatePlan(
    inputId: number,
    ratePlan: RatePlansDTO,
  ): Promise<RatePlans | string> {
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
      updateRatePlan = await this.ratePlansRepository.update(inputId, ratePlan);

      if (updateRatePlan != (null || undefined)) {
        return await this.getByIdRatePlans(inputId);
      }
      //-- end with database operation ---
    } catch (error) {
      msgResponse = 'ERROR in updateRatePlan function service';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }

  /**
   * @description Service to get a paginated listing of all rate plans
   * @param {number} pageNro number type
   * @param {number} pageSize number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns an object with the products paginated list
   */
  async getAllRatePlans(
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
      pageNro =
        pageNroParam == (null || undefined || NaN) ? pageNro : pageNroParam;
      pageSize =
        pageSizeParam == (null || undefined || NaN) ? pageSize : pageSizeParam;
      orderBy =
        orderByParam == (null || undefined || '') ? orderBy : orderByParam;
      orderAt =
        orderAtParam == (null || undefined || '') ? orderAt : orderAtParam;

      // orderBy = await checkOrderBy(orderBy);

      // if(orderBy == (null || undefined)){
      //   return ORDER_BY_NAME_VALUE_ERROR;
      // }

      // orderAt = await checkOrderAt(orderAt);

      // if(orderAt == (undefined || null)){
      //   return ORDER_AT_NAME_VALUE_ERROR;
      // }

      // order = [[orderBy, orderAt]];
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
      msgResponse = 'ERROR in getAllRatePlans function service';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }

  /**
   * @description Service to get a rate plans
   * @param {number} inputId number type
   * @returns an object with the products paginated list
   */
  async getByIdRatePlans(inputId: number): Promise<RatePlans | string> {
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
      msgResponse = 'ERROR in getByIdRatePlans function service';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
