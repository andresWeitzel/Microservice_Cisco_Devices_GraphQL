/* eslint-disable prettier/prettier */
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
    example: '123',
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
    example: '4346666555',
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
}
