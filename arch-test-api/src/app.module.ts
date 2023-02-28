import { Module,NestModule,MiddlewareConsumer  } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageService } from './language/language.service';
import { LanguageController } from './language/language.controller';
import { ConfigModule } from '@nestjs/config';
import {HannaConnectionHandler} from './Db/HanaDbConnectionHandler'
import {RequestHistoryService} from './Db/RequestHistoryService'
import {AuthenticationMiddleware} from './authenticationMiddleware'
import { HealthCheckController } from './health-check/health-check.controller';


@Module({  
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  HttpModule],
  controllers: [AppController,  LanguageController, HealthCheckController],
  providers: [AppService, LanguageService,HannaConnectionHandler,RequestHistoryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes('/language');
  }
}