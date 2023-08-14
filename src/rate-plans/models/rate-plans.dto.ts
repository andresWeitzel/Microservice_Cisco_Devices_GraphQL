/* eslint-disable prettier/prettier */
//External
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  Length,
  Max,
  Min,
  IsInt,
} from 'class-validator';
//Enums
import { Status } from '../enums/status';
//Const-vars
const DECIMAL_SCALE_VALUE = 3;
const MIN_VALUE_FOR_NAME = 4;
const MAX_VALUE_FOR_NAME = 200;
const MIN_VALUE_FOR_DESCRIPTION = 4;
const MAX_VALUE_FOR_DESCRIPTION = 500;
const MIN_VALUE_FOR_VERSION_ID = 1;
const MAX_VALUE_FOR_VERSION_ID = 999999999;
const MIN_VALUE_FOR_VERSION_PLAN = 1;
const MAX_VALUE_FOR_VERSION_PLAN = 20;
const MIN_VALUE_FOR_TYPE_PLAN = 2;
const MAX_VALUE_FOR_TYPE_PLAN = 200;
const MIN_VALUE_FOR_SUSCRIPTION_CHARGE = 2.99;
const MAX_VALUE_FOR_SUSCRIPTION_CHARGE = 100.0;
const MIN_VALUE_FOR_NUMBER_OF_TIERS = 1;
const MAX_VALUE_FOR_NUMBER_OF_TIERS = 10;

@ApiTags('RatePlansDTO')
export class RatePlansDTO {
  /**
   * @description name of the rate plan
   */
  @IsNotEmpty({ message: 'The name cannot be empty' })
  @IsString({ message: 'The name must be of type string' })
  @Length(MIN_VALUE_FOR_NAME, MAX_VALUE_FOR_NAME, {
    message: `The value of the name must be between ${MIN_VALUE_FOR_NAME} and ${MAX_VALUE_FOR_NAME} characters`,
  })
  @ApiProperty({
    name: 'name',
    description:
      'Descriptive rate plan name. Names are unique within an operator.',
    type: 'string',
    minLength: MIN_VALUE_FOR_NAME,
    maxLength: MAX_VALUE_FOR_NAME,
    example: 'plan for individual monthly subscriptions',
  })
  name: string;

  /**
   * @description Description for a plan.
   */
  @IsNotEmpty({ message: 'The description cannot be empty' })
  @IsString({ message: 'The description must be of type string' })
  @Length(MIN_VALUE_FOR_DESCRIPTION, MAX_VALUE_FOR_DESCRIPTION, {
    message: `The value of the description must be between ${MIN_VALUE_FOR_DESCRIPTION} and ${MAX_VALUE_FOR_DESCRIPTION} characters`,
  })
  @ApiProperty({
    name: 'description',
    description: 'Description for a plan.',
    type: 'string',
    minLength: MIN_VALUE_FOR_DESCRIPTION,
    maxLength: MAX_VALUE_FOR_DESCRIPTION,
    example: 'plan for individual monthly subscriptions',
  })
  description: string;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @IsNotEmpty({ message: 'The version id cannot be empty' })
  @IsInt({ message: 'The version id must be of type integer' })
  @Min(MIN_VALUE_FOR_VERSION_ID, {
    message: `the value of the version id must be greater than ${MIN_VALUE_FOR_VERSION_ID}`,
  })
  @Max(MAX_VALUE_FOR_VERSION_ID, {
    message: `the value of the version id must be less than ${MAX_VALUE_FOR_VERSION_ID}`,
  })
  @ApiProperty({
    name: 'versionId',
    description:
      'Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier.',
    type: 'int',
    example: 4346666555,
  })
  versionId: number;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @IsNotEmpty({ message: 'The version plan cannot be empty' })
  @IsString({ message: 'The version plan must be of type string' })
  @Length(MIN_VALUE_FOR_VERSION_PLAN, MAX_VALUE_FOR_VERSION_PLAN, {
    message: `The value of the version plan must be between ${MIN_VALUE_FOR_VERSION_PLAN} and ${MAX_VALUE_FOR_VERSION_PLAN} characters`,
  })
  @ApiProperty({
    name: 'versionPlan',
    description:
      'Specifies the version of the current rate plan. Two different versions of the same rate plan may coexist if there are billable devices assigned to each version (for prepaid plans only)',
    type: 'string',
    minLength: MIN_VALUE_FOR_VERSION_PLAN,
    maxLength: MAX_VALUE_FOR_VERSION_PLAN,
    example: '1.1',
  })
  versionPlan: string;

  /**
   * @description enum propertie. This enum returns only published rate plans with the Published status value. Published rate plans are approved and available for use by devices.
   */
  @IsEnum(Status)
  @IsNotEmpty({ message: 'The status of a device cannot be empty' })
  @ApiProperty({
    name: 'status',
    description: 'status for a device',
    type: 'enum',
    example: 'ACTIVE (only enum: ACTIVE, INACTIVE or PUBLISHED)',
  })
  status: Status;

  /**
   * @description The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).
   */
  @IsNotEmpty({ message: 'The type plan cannot be empty' })
  @IsString({ message: 'The type plan must be of type string' })
  @Length(MIN_VALUE_FOR_TYPE_PLAN, MAX_VALUE_FOR_TYPE_PLAN, {
    message: `The value of the type plan must be between ${MIN_VALUE_FOR_TYPE_PLAN} and ${MAX_VALUE_FOR_TYPE_PLAN} characters`,
  })
  @ApiProperty({
    name: 'type_plan',
    description:
      'The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).',
    type: 'string',
    minLength: MIN_VALUE_FOR_TYPE_PLAN,
    maxLength: MAX_VALUE_FOR_TYPE_PLAN,
    example: 'plan for individual annual subscriptions',
  })
  typePlan: string;

  /**
   * @description	For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.
   */
  @IsNotEmpty({ message: 'The suscription charge of device cannot be empty' })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: DECIMAL_SCALE_VALUE,
    },
    {
      message:
        'The suscription charge of a device must be of type number (decimal) and contain only three decimal places after the separator',
    },
  )
  @Min(MIN_VALUE_FOR_SUSCRIPTION_CHARGE, {
    message: `The suscription charge of a device must be greater than ${MIN_VALUE_FOR_SUSCRIPTION_CHARGE}`,
  })
  @Max(MAX_VALUE_FOR_SUSCRIPTION_CHARGE, {
    message: `The suscription charge of a device must be less than ${MAX_VALUE_FOR_SUSCRIPTION_CHARGE}`,
  })
  @ApiProperty({
    name: 'subscriptionCharge',
    description:
      'For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.',
    type: 'decimal',
    example: 2.99,
  })
  subscriptionCharge: number;

  /**
   * @description		The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges..
   */
  @IsNotEmpty({ message: 'The number of tiers cannot be empty' })
  @IsInt({ message: 'The number of tiers must be of type integer' })
  @Min(MIN_VALUE_FOR_NUMBER_OF_TIERS, {
    message: `the value of the number of tiers must be greater than ${MIN_VALUE_FOR_NUMBER_OF_TIERS}`,
  })
  @Max(MAX_VALUE_FOR_NUMBER_OF_TIERS, {
    message: `the value of the number of tiers must be less than ${MAX_VALUE_FOR_NUMBER_OF_TIERS}`,
  })
  @ApiProperty({
    name: 'number_of_tiers',
    description:
      '	The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges.',
    type: 'int',
    example: 1,
  })
  numberOfTiers: number;
}
