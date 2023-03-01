import { Injectable } from '@nestjs/common';
import {HannaConnectionHandler} from '../Db/HanaDbConnectionHandler'
import {RequestHistoryService}  from '../Db/RequestHistoryService'
import axios from "axios";
@Injectable()
export class LanguageService {
    constructor(private requestHistoryService :RequestHistoryService) {}

   async GetLanguageData(lang :string, username :string): Promise<any> {

    console.log("Queryng language", lang)
       return axios.get(`https://restcountries.com/v2/lang/${lang}`).then(result =>{
          
         this.requestHistoryService.insertHistory(username,lang);
         this.requestHistoryService.getAll();

          return result.data
       })

    }
}