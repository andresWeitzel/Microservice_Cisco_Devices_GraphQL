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
//Const-vars
const MIN_VALUE_ID = 1;
const MAX_VALUE_ID = 9007199254740991n;
const DECIMAL_SCALE_VALUE = 3;
const DECIMAL_PRECISION_VALUE = 6;
const MIN_VALUE_FOR_NAME = 4;
const MAX_VALUE_FOR_NAME = 200;
const MIN_VALUE_FOR_DESCRIPTION = 4;
const MAX_VALUE_FOR_DESCRIPTION = 500;
const MIN_VALUE_FOR_VERSION_PLAN = 1;
const MAX_VALUE_FOR_VERSION_PLAN = 20;
const MIN_VALUE_FOR_TYPE_PLAN = 2;
const MAX_VALUE_FOR_TYPE_PLAN = 200;
const DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE = 2.99;
const MIN_VALUE_FOR_NUMBER_OF_TIERS = 1;
const MIN_VALUE_LENGTH_DATE = 4;
const MAX_VALUE_LENGTH_DATE = 50;


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
    name: 'id',
    description: 'Identifier for a rate plan',
    type: 'bigint',
    minimum: MIN_VALUE_ID,
    maximum: Number(MAX_VALUE_ID),
    nullable: false,
    example: 123,
  })
  id: number;

  /**
   * @description Descriptive rate plan name. Names are unique within an operator.
   */
  @Field()
  @Column({
    name: 'name',
    length: MAX_VALUE_FOR_NAME,
    nullable: false,
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
  @Field()
  @Column({
    name: 'description',
    length: MAX_VALUE_FOR_DESCRIPTION,
    nullable: false,
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
  @Field()
  @Column({
    name: 'version_id',
    type: 'int',
    nullable: false,
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
  @Field()
  @Column({
    name: 'version_plan',
    length: MAX_VALUE_FOR_VERSION_PLAN,
    nullable: true,
    default: '1.0',
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
  @Field()
  @Column({
    name: 'status',
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  @ApiProperty({
    name: 'status',
    description: 'status for a product',
    type: 'enum',
    example: 'ACTIVE (only enum: ACTIVE, INACTIVE or PUBLISHED)',
  })
  status: Status;

  /**
   * @description The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).
   */
  @Field()
  @Column({
    name: 'type_plan',
    length: MAX_VALUE_FOR_TYPE_PLAN,
    nullable: false,
  })
  @ApiProperty({
    name: 'typePlan',
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
  @Field()
  @Column({
    name: 'subscription_charge',
    type: 'decimal',
    nullable: true,
    default: DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE,
    precision: DECIMAL_PRECISION_VALUE,
    scale: DECIMAL_SCALE_VALUE,
  })
  @ApiProperty({
    name: 'subscriptionCharge',
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
    name: 'number_of_tiers',
    type: 'int',
    nullable: true,
    default: MIN_VALUE_FOR_NUMBER_OF_TIERS,
  })
  @ApiProperty({
    name: 'numberOfTiers',
    description:
      '	The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges.',
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
    nullable: false,
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
  @UpdateDateColumn({ name: 'update_date', type: 'datetime', nullable: false })
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
