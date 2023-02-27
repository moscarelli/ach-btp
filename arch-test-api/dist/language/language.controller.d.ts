import { HannaConnectionHandler } from '../Db/HanaDbConnectionHandler';
export declare class LanguageController {
    private dbConnetion;
    constructor(dbConnetion: HannaConnectionHandler);
    GetRequests(): Promise<any>;
}
