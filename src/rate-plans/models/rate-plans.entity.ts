/* eslint-disable prettier/prettier */
//External
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
//Enums
import { Status } from '../enums/status';
import { RatePlansProperties } from '../enums/class-properties';
//Const-vars
//Decimal config
const DECIMAL_SCALE_VALUE = Number(RatePlansProperties.DECIMAL_SCALE_VALUE);
const DECIMAL_PRECISION_VALUE = Number(RatePlansProperties.DECIMAL_PRECISION_VALUE);
//id Field
const NAME_VALUE_FOR_ID = RatePlansProperties.NAME_VALUE_FOR_ID;
const MIN_LENGTH_VALUE_FOR_ID = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_ID);
const MAX_LENGTH_VALUE_FOR_ID = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_ID);
//name Field
const NAME_VALUE_FOR_NAME = RatePlansProperties.NAME_VALUE_FOR_NAME;
const MIN_LENGTH_VALUE_FOR_NAME = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_NAME);
const MAX_LENGTH_VALUE_FOR_NAME = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_NAME);
//description field
const NAME_VALUE_FOR_DESCRIPTION = RatePlansProperties.NAME_VALUE_FOR_DESCRIPTION;
const MIN_LENGTH_VALUE_FOR_DESCRIPTION = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_DESCRIPTION);
const MAX_LENGTH_VALUE_FOR_DESCRIPTION = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_DESCRIPTION);
//version_id field
const NAME_VALUE_FOR_VERSION_ID = RatePlansProperties.NAME_VALUE_FOR_VERSION_ID;
const MIN_VALUE_FOR_VERSION_ID = Number(RatePlansProperties.MIN_VALUE_FOR_VERSION_ID);
const MAX_VALUE_FOR_VERSION_ID = Number(RatePlansProperties.MAX_VALUE_FOR_VERSION_ID);
//version_plan field
const NAME_VALUE_FOR_VERSION_PLAN = RatePlansProperties.NAME_VALUE_FOR_VERSION_PLAN;
const MIN_LENGTH_VALUE_FOR_VERSION_PLAN = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_VERSION_PLAN);
const MAX_LENGTH_VALUE_FOR_VERSION_PLAN = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_VERSION_PLAN);
//status field
const NAME_VALUE_FOR_STATUS = RatePlansProperties.NAME_VALUE_FOR_STATUS;
//type_plan field
const NAME_VALUE_FOR_TYPE_PLAN = RatePlansProperties.NAME_VALUE_FOR_TYPE_PLAN;
const MIN_LENGTH_VALUE_FOR_TYPE_PLAN = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_TYPE_PLAN);
const MAX_LENGTH_VALUE_FOR_TYPE_PLAN = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_TYPE_PLAN);
//sucription_charge field
const NAME_VALUE_FOR_SUSCRIPTION_CHARGE = RatePlansProperties.NAME_VALUE_FOR_SUSCRIPTION_CHARGE;
const DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE = RatePlansProperties.DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE;
const MIN_VALUE_FOR_SUSCRIPTION_CHARGE = Number(RatePlansProperties.MIN_VALUE_FOR_SUSCRIPTION_CHARGE);
const MAX_VALUE_FOR_SUSCRIPTION_CHARGE = Number(RatePlansProperties.MAX_VALUE_FOR_SUSCRIPTION_CHARGE);
//number_of_tiers_field
const NAME_VALUE_FOR_NUMBER_OF_TIERS = RatePlansProperties.NAME_VALUE_FOR_NUMBER_OF_TIERS;
const MIN_VALUE_FOR_NUMBER_OF_TIERS = Number(RatePlansProperties.MIN_VALUE_FOR_NUMBER_OF_TIERS);
const MAX_VALUE_FOR_NUMBER_OF_TIERS = Number(RatePlansProperties.MAX_VALUE_FOR_NUMBER_OF_TIERS);
//creation_date field
const NAME_VALUE_FOR_CREATION_DATE = RatePlansProperties.NAME_VALUE_FOR_CREATION_DATE;
//update_date field
const NAME_VALUE_FOR_UPDATE_DATE = RatePlansProperties.NAME_VALUE_FOR_UPDATE_DATE;


@ObjectType('RatePlans')
@Entity({ name: 'rate_plans' })
@ApiTags('RatePlans')
export class RatePlans extends BaseEntity {
  /**
   * @description Identifier for a rate plan
   */
  @Field()
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_ID}`,
    description: 'Identifier for a rate plan',
    type: 'bigint',
    minimum: MIN_LENGTH_VALUE_FOR_ID,
    maximum: MAX_LENGTH_VALUE_FOR_ID,
    nullable: false,
    example: 123,
  })
  id: number;

  /**
   * @description Descriptive rate plan name. Names are unique within an operator.
   */
  @Field()
  @Column({
    name: `${NAME_VALUE_FOR_NAME}`,
    length: MAX_LENGTH_VALUE_FOR_NAME,
    nullable: false,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_NAME}`,
    description:
      `Descriptive rate plan ${NAME_VALUE_FOR_NAME}. Names are unique within an operator.`,
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
  @Column({
    name: `${NAME_VALUE_FOR_DESCRIPTION}`,
    length: MAX_LENGTH_VALUE_FOR_DESCRIPTION,
    nullable: false,
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
  @Column({
    name: `${NAME_VALUE_FOR_VERSION_ID}`,
    type: 'int',
    nullable: false,
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
  @Column({
    name: `${NAME_VALUE_FOR_VERSION_PLAN}`,
    length: MAX_LENGTH_VALUE_FOR_VERSION_PLAN,
    nullable: true,
    default: '1.0',
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_VERSION_PLAN}`,
    description:
    `Specifies the ${NAME_VALUE_FOR_VERSION_PLAN} of the current rate plan. Two different versions of the same rate plan may coexist if there are billable devices assigned to each version (for prepaid plans only)`,
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
  @Column({
    name: `${NAME_VALUE_FOR_STATUS}`,
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_STATUS}`,
    description:`${NAME_VALUE_FOR_STATUS} for a product`,
    type: 'enum',
    example: 'ACTIVE (only enum: ACTIVE, INACTIVE or PUBLISHED)',
  })
  status: Status;

  /**
   * @description The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).
   */
  @Field()
  @Column({
    name: `${NAME_VALUE_FOR_TYPE_PLAN}`,
    length: MAX_LENGTH_VALUE_FOR_TYPE_PLAN,
    nullable: false,
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
  @Column({
    name: `${NAME_VALUE_FOR_SUSCRIPTION_CHARGE}`,
    type: 'decimal',
    nullable: true,
    default: DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE,
    precision: DECIMAL_PRECISION_VALUE,
    scale: DECIMAL_SCALE_VALUE,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_SUSCRIPTION_CHARGE}`,
    description:
      'For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.',
    type: 'decimal',
    example: DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE,
  })
  subscriptionCharge: number;

  /**
   * @description		The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges..
   */
  @Field()
  @Column({
    name: `${NAME_VALUE_FOR_NUMBER_OF_TIERS}`,
    type: 'int',
    nullable: true,
    default: MIN_VALUE_FOR_NUMBER_OF_TIERS,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_NUMBER_OF_TIERS}`,
    description:
      `The ${NAME_VALUE_FOR_NUMBER_OF_TIERS} specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges.`,
    type: 'int',
    example: MIN_VALUE_FOR_NUMBER_OF_TIERS,
  })
  numberOfTiers: number;

  /**
   * @description	creation date for a rate-plan record
   */
  @Field()
  @CreateDateColumn({
    name: 'creation_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({
    name: 'creationDate',
    description: 'creation date for a rate-plan record',
    type: 'datetime',
    minLength: MIN_VALUE_LENGTH_DATE,
    maxLength: MAX_VALUE_LENGTH_DATE,
    example: '2023-02-17T00:47:58.000Z',
  })
  creationDate: Date;

  /**
   * @description	update date for a rate-plan record
   */
  @Field()
  @UpdateDateColumn({
    name: 'update_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({
    name: 'updateDate',
    description: 'update date for a product',
    type: 'datetime',
    minLength: MIN_VALUE_LENGTH_DATE,
    maxLength: MAX_VALUE_LENGTH_DATE,
    example: '2023-02-17T00:47:58.000Z',
  })
  updateDate: Date;
}
