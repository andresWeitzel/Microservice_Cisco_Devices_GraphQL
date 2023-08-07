/* eslint-disable prettier/prettier */
//External
import { ObjectType } from '@nestjs/graphql';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
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

@ObjectType()
@Entity({ name: 'rate_plans' })
@ApiTags('RatePlans')
export class RatePlans extends BaseEntity {
  /**
   * @description Identifier for a rate plan
   */
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  @IsNotEmpty()
  @ApiProperty({
    name: 'id',
    description: 'Identifier for a rate plan',
    type: 'int',
    minimum: 1,
    maximum: 999999999,
    nullable: false,
    example: 123,
  })
  id: number;

  /**
   * @description Descriptive rate plan name. Names are unique within an operator.
   */
  @Column({
    name: 'name',
    length: 200,
    type: 'string',
    nullable: false,
  })
  @IsNotEmpty()
  @ApiProperty({
    name: 'name',
    description:
      'Descriptive rate plan name. Names are unique within an operator.',
    type: 'string',
    minLength: 4,
    maxLength: 200,
    example: 'plan for individual monthly subscriptions',
  })
  name: string;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @Column({
    name: 'version_id',
    type: 'int',
    nullable: false,
  })
  @IsNotEmpty()
  @ApiProperty({
    name: 'name',
    description:
      'Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier.',
    type: 'int',
    example: 4346666555,
  })
  versionId: number;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @Column({
    name: 'version_id',
    type: 'string',
    nullable: true,
    default: '1.0',
  })
  @ApiProperty({
    name: 'name',
    description:
      'Specifies the version of the current rate plan. Two different versions of the same rate plan may coexist if there are billable devices assigned to each version (for prepaid plans only)',
    type: 'string',
    minLength: 1,
    maxLength: 20,
    example: '1.1',
  })
  versionPlan: string;

  /**
   * @description enum propertie. This enum returns only published rate plans with the Published status value. Published rate plans are approved and available for use by devices.
   */
  @Column({
    name: 'status',
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
    nullable: false,
  })
  @IsNotEmpty()
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
  @Column({
    name: 'type_plan',
    type: 'string',
    nullable: false,
  })
  @IsNotEmpty()
  @ApiProperty({
    name: 'type_plan',
    description:
      'The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).',
    type: 'string',
    minLength: 2,
    maxLength: 200,
    example: 'plan for individual annual subscriptions',
  })
  typePlan: string;

  /**
   * @description	For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.
   */
  @Column({
    name: 'subscription_charge',
    type: 'decimal',
    nullable: true,
    default: 2.99,
    precision: 6,
    scale: 3,
  })
  @ApiProperty({
    name: 'subscription_charge',
    description:
      'For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.',
    type: 'decimal',
    example: 2.99,
  })
  subscriptionCharge: number;

  /**
   * @description		The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges..
   */
  @Column({
    name: 'number_of_tiers',
    type: 'int',
    nullable: true,
    default: 1,
  })
  @ApiProperty({
    name: 'number_of_tiers',
    description:
      '	The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges.',
    type: 'int',
    example: 1,
  })
  number_of_tiers: number;

  /**
   * @description	creation date for a rate-plan record
   */
  @CreateDateColumn({
    name: 'creation_date',
    type: 'datetime',
    nullable: false,
  })
  @IsNotEmpty()
  @ApiProperty({
    name: 'creationDate',
    description: 'creation date for a rate-plan record',
    type: 'string',
    minLength: 4,
    maxLength: 50,
    example: '2023-02-17T00:47:58.000Z',
  })
  creationDate: Date;

  /**
   * @description	update date for a rate-plan record
   */
  @UpdateDateColumn({ name: 'update_date', type: 'datetime', nullable: false })
  @IsNotEmpty()
  @ApiProperty({
    name: 'updateDate',
    description: 'update date for a product',
    type: 'string',
    minLength: 4,
    maxLength: 50,
    example: '2023-02-17T00:47:58.000Z',
  })
  updateDate: Date;
}
