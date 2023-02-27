import { HannaConnectionHandler } from '../Db/HanaDbConnectionHandler';
import { RequestHistoryService } from '../Db/RequestHistoryService';
import { LanguageService } from './language.service';
export declare class LanguageController {
    private dbConnetion;
    private requestHistoryService;
    private languageService;
    constructor(dbConnetion: HannaConnectionHandler, requestHistoryService: RequestHistoryService, languageService: LanguageService);
    GetRequests(language: string): Promise<any>;
}
