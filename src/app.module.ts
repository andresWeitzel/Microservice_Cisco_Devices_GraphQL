import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatePlansModule } from './rate-plans/rate-plans.module';

@Module({
  imports: [RatePlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
