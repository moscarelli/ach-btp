import { RequestHistoryService } from '../Db/RequestHistoryService';
export declare class LanguageService {
    private requestHistoryService;
    constructor(requestHistoryService: RequestHistoryService);
    GetLanguageData(lang: string, username: string): Promise<any>;
}
