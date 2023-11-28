/* eslint-disable prettier/prettier */
//External
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Delete } from '@nestjs/common';
//Models
import { RatePlans } from '.././models/rate-plans.entity';
//Service
import { DeleteRatePlansService } from '.././services/delete.service';
//const-vars
let ratePlanResult: any;
let msgResponse: string;
let msgLog: string;

//Check
@Resolver()
@ApiTags('DeleteRatePlansResolver')
export class DeleteRatePlansResolver {
  constructor(private deletePlansService: DeleteRatePlansService) {}

  /**
   * @description function for delete a rate plan to database
   * @param {number} inputId number type
   * @returns a response with the rate plan object and status code
   */
  @Delete('/id/:inputId')
  @ApiOperation({ summary: 'Delete a rate plans' })
  @Mutation(() => RatePlans, { name: 'deleteRatePlan' })
  async deleteRatePlan(
    @Args({ name: 'inputId' }) inputId: number,
  ): Promise<string | any> {
    try {
      msgResponse = null;
      msgLog = null;

      // --- start with database operations ---
      ratePlanResult = await this.deletePlansService.delete(inputId);
      if (ratePlanResult != null || ratePlanResult != undefined) {
        return `The Rate plan with the id ${inputId} has been successfully deleted`;
      }
      // --- end with database operations ---
    } catch (error) {
      msgResponse =
        'ERROR in deleteRatePlan function for DeleteRatePlansResolver class';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
