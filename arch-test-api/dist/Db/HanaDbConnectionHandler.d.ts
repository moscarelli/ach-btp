import * as hana from '@sap/hana-client';
export declare class HannaConnectionHandler {
    connection: hana.Connection;
    private connParams;
    constructor();
    private connect;
    private disconect;
}
