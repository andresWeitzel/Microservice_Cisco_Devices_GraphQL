//External
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RatePlansModule } from './rate-plans/rate-plans.module';
import { join } from 'path';
//Moduls
import { DatabaseModule } from './database/database.module';
//Controllers
import { AppController } from './app.controller';
//Services
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
    }),
    RatePlansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
