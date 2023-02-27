import { Controller, Get, HttpException  } from '@nestjs/common';
import {HannaConnectionHandler} from '../Db/HanaDbConnectionHandler'
import {RequestHistoryService,RequestHistory}  from '../Db/RequestHistoryService'
@Controller('language')
export class LanguageController {
    constructor(private dbConnetion: HannaConnectionHandler, private requestHistoryService :RequestHistoryService) {}

    @Get()
    async GetRequests(): Promise<any> {

        //await this.dbConnetion.GetConnection()     
        var data :  RequestHistory[];
        data = await this.requestHistoryService.executeQuery()
        console.log("data",data);

        //return await getdata()        
      }

}
