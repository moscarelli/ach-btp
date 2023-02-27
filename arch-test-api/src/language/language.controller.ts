import { Controller, Get, HttpException, Param, Query  } from '@nestjs/common';
import {HannaConnectionHandler} from '../Db/HanaDbConnectionHandler'
import {RequestHistoryService,RequestHistory}  from '../Db/RequestHistoryService'
import { LanguageService } from './language.service';
@Controller('language')
export class LanguageController {
    constructor(private dbConnetion: HannaConnectionHandler, private requestHistoryService :RequestHistoryService, private languageService: LanguageService) {}

    @Get()
    async GetRequests(@Query('language') language:string): Promise<any> {
        //await this.dbConnetion.GetConnection()     
        // var data :  RequestHistory[];
        // data = await this.requestHistoryService.executeQuery()
        // console.log("data",data);
        //return await getdata()       
        var data =  await this.languageService.GetLanguageData(language);
        
        console.log("data",data);
        return data      
      }

}
