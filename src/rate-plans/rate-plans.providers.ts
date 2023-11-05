/* eslint-disable prettier/prettier */
//external
import { DataSource } from 'typeorm';
//models
import { RatePlans } from './models/rate-plans.entity';

export const RatePlansProviders = [
  {
    provide: 'RATE_PLANS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RatePlans),
    inject: ['DATA_SOURCE'],
  },
];
