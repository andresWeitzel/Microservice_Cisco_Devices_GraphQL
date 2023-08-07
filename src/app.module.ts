//External
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
//Moduls
import { RatePlansModule } from './rate-plans/rate-plans.module';
//Controllers
import { AppController } from './app.controller';
//Services
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RatePlansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
