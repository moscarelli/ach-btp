import { HannaConnectionHandler } from "./HanaDbConnectionHandler";
export declare class RequestHistoryService {
    private handlers;
    constructor(connectionhandler: HannaConnectionHandler);
    getAll(): Promise<RequestHistory[]>;
    insertHistory(user: string, parameter: string): Promise<any>;
}
export interface RequestHistory {
    ID: Number;
    USER: String;
    PARAMETERS: String;
}
