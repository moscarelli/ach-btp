import { Controller, Get, HttpException  } from '@nestjs/common';
import {getdata} from '../Db/hannaDb';
@Controller('language')
export class LanguageController {

    @Get()
    async GetRequests(): Promise<any> {
        return await getdata()        
      }

}
