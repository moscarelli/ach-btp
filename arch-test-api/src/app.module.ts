import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageService } from './language/language.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { LanguageController } from './language/language.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';

@Module({
  imports: [],
  controllers: [AppController, BusinessPartnerController, LanguageController],
  providers: [AppService, BusinessPartnerService, LanguageService],
})
export class AppModule {}
