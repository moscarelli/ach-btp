import { Controller, Get, Query,Request ,UseGuards   } from '@nestjs/common';
import { LanguageService } from './language.service';
import {AuthenticationMiddleware} from '../authenticationMiddleware'
import { UserRequest } from 'src/UserRequest';
import { SetMetadata } from '@nestjs/common';
const AllowUnauthorizedRequest = () => SetMetadata('allowUnauthorizedRequest', true);
@Controller('language')
@UseGuards(AuthenticationMiddleware)  
export class LanguageController {
    constructor(private languageService: LanguageService) {}

    @Get() 
    async GetRequests(@Request() request: UserRequest, @Query('language') language:string): Promise<any> {    
        const user = request.user;
        const username = user ? user.id : 'anonymous';   
        console.log("Username", username);
        var data =  await this.languageService.GetLanguageData(language, username);               
        return data      
    }
}
