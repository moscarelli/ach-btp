import { HannaConnectionHandler } from '../Db/HanaDbConnectionHandler';
import { RequestHistoryService } from '../Db/RequestHistoryService';
export declare class LanguageService {
    private dbConnetion;
    private requestHistoryService;
    constructor(dbConnetion: HannaConnectionHandler, requestHistoryService: RequestHistoryService);
    GetLanguageData(lang: string, username: string): Promise<any>;
}
