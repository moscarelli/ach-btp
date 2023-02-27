import { Controller, Get, HttpException  } from '@nestjs/common';
import {getdata} from '../Db/hannaDb';
import {HannaConnectionHandler} from '../Db/HanaDbConnectionHandler'
import {RequestHistory}  from '../Db/RequestHistory'
@Controller('language')
export class LanguageController {
    constructor(private dbConnetion: HannaConnectionHandler) {}

    @Get()
    async GetRequests(): Promise<any> {

        //await this.dbConnetion.GetConnection()     
        var data :  RequestHistory[];
        data = await this.dbConnetion.executeQuery()
        console.log("data",data);

        //return await getdata()        
      }

}
