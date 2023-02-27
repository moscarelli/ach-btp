import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import axios from "axios";
@Injectable()
export class LanguageService {

   async GetLanguageData(lang :string): Promise<any> {
    console.log("Queryng language", lang)
    return  (await axios.get(`https://restcountries.com/v2/lang/${lang}`)).data        
    }
}