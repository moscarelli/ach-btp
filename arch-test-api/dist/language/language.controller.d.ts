import { HannaConnectionHandler } from '../Db/HanaDbConnectionHandler';
import { RequestHistoryService } from '../Db/RequestHistoryService';
export declare class LanguageController {
    private dbConnetion;
    private requestHistoryService;
    constructor(dbConnetion: HannaConnectionHandler, requestHistoryService: RequestHistoryService);
    GetRequests(): Promise<any>;
}
