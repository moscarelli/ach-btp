import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageService } from './language/language.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { LanguageController } from './language/language.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';
import { ConfigModule } from '@nestjs/config';
import {HannaConnectionHandler} from './Db/HanaDbConnectionHandler'
import {RequestHistoryService} from './Db/RequestHistoryService'


@Module({  
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '../.env',
  })],
  controllers: [AppController, BusinessPartnerController, LanguageController],
  providers: [AppService, BusinessPartnerService, LanguageService,HannaConnectionHandler,RequestHistoryService],
})
export class AppModule {}
