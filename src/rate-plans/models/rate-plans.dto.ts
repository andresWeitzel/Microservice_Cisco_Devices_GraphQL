/* eslint-disable prettier/prettier */
//External
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
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
import { RatePlansProperties } from '../enums/class-properties';
//Const-vars
//Decimal config
const DECIMAL_SCALE_VALUE = Number(RatePlansProperties.DECIMAL_SCALE_VALUE);
//name Field
const NAME_VALUE_FOR_NAME = RatePlansProperties.NAME_VALUE_FOR_NAME;
const MIN_LENGTH_VALUE_FOR_NAME = Number(
  RatePlansProperties.MIN_LENGTH_VALUE_FOR_NAME,
);
const MAX_LENGTH_VALUE_FOR_NAME = Number(
  RatePlansProperties.MAX_LENGTH_VALUE_FOR_NAME,
);
//description field
const NAME_VALUE_FOR_DESCRIPTION =
  RatePlansProperties.NAME_VALUE_FOR_DESCRIPTION;
const MIN_LENGTH_VALUE_FOR_DESCRIPTION = Number(
  RatePlansProperties.MIN_LENGTH_VALUE_FOR_DESCRIPTION,
);
const MAX_LENGTH_VALUE_FOR_DESCRIPTION = Number(
  RatePlansProperties.MAX_LENGTH_VALUE_FOR_DESCRIPTION,
);
//version_id field
const NAME_VALUE_FOR_VERSION_ID = RatePlansProperties.NAME_VALUE_FOR_VERSION_ID;
const MIN_VALUE_FOR_VERSION_ID = Number(
  RatePlansProperties.MIN_VALUE_FOR_VERSION_ID,
);
const MAX_VALUE_FOR_VERSION_ID = Number(
  RatePlansProperties.MAX_VALUE_FOR_VERSION_ID,
);
//version_plan field
const NAME_VALUE_FOR_VERSION_PLAN =
  RatePlansProperties.NAME_VALUE_FOR_VERSION_PLAN;
const MIN_LENGTH_VALUE_FOR_VERSION_PLAN = Number(
  RatePlansProperties.MIN_LENGTH_VALUE_FOR_VERSION_PLAN,
);
const MAX_LENGTH_VALUE_FOR_VERSION_PLAN = Number(
  RatePlansProperties.MAX_LENGTH_VALUE_FOR_VERSION_PLAN,
);
//status field
const NAME_VALUE_FOR_STATUS = RatePlansProperties.NAME_VALUE_FOR_STATUS;
//type_plan field
const NAME_VALUE_FOR_TYPE_PLAN = RatePlansProperties.NAME_VALUE_FOR_TYPE_PLAN;
const MIN_LENGTH_VALUE_FOR_TYPE_PLAN = Number(
  RatePlansProperties.MIN_LENGTH_VALUE_FOR_TYPE_PLAN,
);
const MAX_LENGTH_VALUE_FOR_TYPE_PLAN = Number(
  RatePlansProperties.MAX_LENGTH_VALUE_FOR_TYPE_PLAN,
);
//suscription_charge field
const NAME_VALUE_FOR_SUSCRIPTION_CHARGE =
  RatePlansProperties.NAME_VALUE_FOR_SUSCRIPTION_CHARGE;
const MIN_VALUE_FOR_SUSCRIPTION_CHARGE = Number(
  RatePlansProperties.MIN_VALUE_FOR_SUSCRIPTION_CHARGE,
);
const MAX_VALUE_FOR_SUSCRIPTION_CHARGE = Number(
  RatePlansProperties.MAX_VALUE_FOR_SUSCRIPTION_CHARGE,
);
//number_of_tiers field
const NAME_VALUE_FOR_NUMBER_OF_TIERS =
  RatePlansProperties.NAME_VALUE_FOR_NUMBER_OF_TIERS;
const MIN_VALUE_FOR_NUMBER_OF_TIERS = Number(
  RatePlansProperties.MIN_VALUE_FOR_NUMBER_OF_TIERS,
);
const MAX_VALUE_FOR_NUMBER_OF_TIERS = Number(
  RatePlansProperties.MAX_VALUE_FOR_NUMBER_OF_TIERS,
);

@InputType()
@ApiTags('RatePlansDTO')
export class RatePlansDTO {
  /**
   * @description name of the rate plan
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_NAME} cannot be empty` })
  @IsString({ message: `The ${NAME_VALUE_FOR_NAME} must be of type string` })
  @Length(MIN_LENGTH_VALUE_FOR_NAME, MAX_LENGTH_VALUE_FOR_NAME, {
    message: `The value of the ${NAME_VALUE_FOR_NAME} must be between ${MIN_LENGTH_VALUE_FOR_NAME} and ${MAX_LENGTH_VALUE_FOR_NAME} characters`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_NAME}`,
    description: `Descriptive rate plan ${NAME_VALUE_FOR_NAME}. Names are unique within an operator.`,
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_NAME,
    maxLength: MAX_LENGTH_VALUE_FOR_NAME,
    example: 'plan for individual monthly subscriptions',
  })
  name: string;

  /**
   * @description Description for a plan.
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_DESCRIPTION} cannot be empty` })
  @IsString({
    message: `The ${NAME_VALUE_FOR_DESCRIPTION} must be of type string`,
  })
  @Length(MIN_LENGTH_VALUE_FOR_DESCRIPTION, MAX_LENGTH_VALUE_FOR_DESCRIPTION, {
    message: `The value of the ${NAME_VALUE_FOR_DESCRIPTION} must be between ${MIN_LENGTH_VALUE_FOR_DESCRIPTION} and ${MAX_LENGTH_VALUE_FOR_DESCRIPTION} characters`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_DESCRIPTION}`,
    description: `${NAME_VALUE_FOR_DESCRIPTION} for a plan.`,
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_DESCRIPTION,
    maxLength: MAX_LENGTH_VALUE_FOR_DESCRIPTION,
    example: 'plan for individual monthly subscriptions',
  })
  description: string;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_VERSION_ID} cannot be empty` })
  @IsInt({
    message: `The ${NAME_VALUE_FOR_VERSION_ID} must be of type integer`,
  })
  @Min(MIN_VALUE_FOR_VERSION_ID, {
    message: `the value of the ${NAME_VALUE_FOR_VERSION_ID} must be greater than ${MIN_VALUE_FOR_VERSION_ID}`,
  })
  @Max(MAX_VALUE_FOR_VERSION_ID, {
    message: `the value of the ${NAME_VALUE_FOR_VERSION_ID} must be less than ${MAX_VALUE_FOR_VERSION_ID}`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_VERSION_ID}`,
    description:
      'Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier.',
    type: 'int',
    example: 4346666555,
  })
  versionId: number;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_VERSION_PLAN} cannot be empty` })
  @IsString({
    message: `The ${NAME_VALUE_FOR_VERSION_PLAN} must be of type string`,
  })
  @Length(
    MIN_LENGTH_VALUE_FOR_VERSION_PLAN,
    MAX_LENGTH_VALUE_FOR_VERSION_PLAN,
    {
      message: `The value of the ${NAME_VALUE_FOR_VERSION_PLAN} must be between ${MIN_LENGTH_VALUE_FOR_VERSION_PLAN} and ${MAX_LENGTH_VALUE_FOR_VERSION_PLAN} characters`,
    },
  )
  @ApiProperty({
    name: `${NAME_VALUE_FOR_VERSION_PLAN}`,
    description:
      'Specifies the version of the current rate plan. Two different versions of the same rate plan may coexist if there are billable devices assigned to each version (for prepaid plans only)',
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_VERSION_PLAN,
    maxLength: MAX_LENGTH_VALUE_FOR_VERSION_PLAN,
    example: '1.1',
  })
  versionPlan: string;

  /**
   * @description enum propertie. This enum returns only published rate plans with the Published status value. Published rate plans are approved and available for use by devices.
   */
  @Field()
  @IsEnum(Status)
  @IsNotEmpty({
    message: `The ${NAME_VALUE_FOR_STATUS} of a device cannot be empty`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_STATUS}`,
    description: `${NAME_VALUE_FOR_STATUS} for a device`,
    type: 'enum',
    example: 'ACTIVE (only enum: ACTIVE, INACTIVE or PUBLISHED)',
  })
  status: Status;

  /**
   * @description The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_TYPE_PLAN} cannot be empty` })
  @IsString({
    message: `The ${NAME_VALUE_FOR_TYPE_PLAN} must be of type string`,
  })
  @Length(MIN_LENGTH_VALUE_FOR_TYPE_PLAN, MAX_LENGTH_VALUE_FOR_TYPE_PLAN, {
    message: `The value of the ${NAME_VALUE_FOR_TYPE_PLAN} must be between ${MIN_LENGTH_VALUE_FOR_TYPE_PLAN} and ${MAX_LENGTH_VALUE_FOR_TYPE_PLAN} characters`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_TYPE_PLAN}`,
    description:
      'The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).',
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_TYPE_PLAN,
    maxLength: MAX_LENGTH_VALUE_FOR_TYPE_PLAN,
    example: 'plan for individual annual subscriptions',
  })
  typePlan: string;

  /**
   * @description	For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.
   */
  @Field()
  @IsNotEmpty({
    message: `The ${NAME_VALUE_FOR_SUSCRIPTION_CHARGE} of device cannot be empty`,
  })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: DECIMAL_SCALE_VALUE,
    },
    {
      message: `The ${NAME_VALUE_FOR_SUSCRIPTION_CHARGE} of a device must be of type number (decimal) and contain only three decimal places after the separator`,
    },
  )
  @Min(MIN_VALUE_FOR_SUSCRIPTION_CHARGE, {
    message: `The ${NAME_VALUE_FOR_SUSCRIPTION_CHARGE} of a device must be greater than ${MIN_VALUE_FOR_SUSCRIPTION_CHARGE}`,
  })
  @Max(MAX_VALUE_FOR_SUSCRIPTION_CHARGE, {
    message: `The ${NAME_VALUE_FOR_SUSCRIPTION_CHARGE} of a device must be less than ${MAX_VALUE_FOR_SUSCRIPTION_CHARGE}`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_SUSCRIPTION_CHARGE}`,
    description:
      'For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.',
    type: 'decimal',
    example: 2.99,
  })
  subscriptionCharge: number;

  /**
   * @description		The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges..
   */
  @Field()
  @IsNotEmpty({
    message: `The ${NAME_VALUE_FOR_NUMBER_OF_TIERS} cannot be empty`,
  })
  @IsInt({
    message: `The ${NAME_VALUE_FOR_NUMBER_OF_TIERS} must be of type integer`,
  })
  @Min(MIN_VALUE_FOR_NUMBER_OF_TIERS, {
    message: `The value of the ${NAME_VALUE_FOR_NUMBER_OF_TIERS} must be greater than ${MIN_VALUE_FOR_NUMBER_OF_TIERS}`,
  })
  @Max(MAX_VALUE_FOR_NUMBER_OF_TIERS, {
    message: `The value of the ${NAME_VALUE_FOR_NUMBER_OF_TIERS} must be less than ${MAX_VALUE_FOR_NUMBER_OF_TIERS}`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_NUMBER_OF_TIERS}`,
    description: `The ${NAME_VALUE_FOR_NUMBER_OF_TIERS} specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges.`,
    type: 'int',
    example: 1,
  })
  numberOfTiers: number;
}
