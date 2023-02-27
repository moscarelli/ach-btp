import { Injectable } from '@nestjs/common';
import { HannaConnectionHandler } from "./HanaDbConnectionHandler";

@Injectable()
export class RequestHistoryService {  

    private handlers :HannaConnectionHandler ;
    constructor(connectionhandler:HannaConnectionHandler) {
        this.handlers = connectionhandler;
      }


    async executeQuery(): Promise<RequestHistory[]> {
        const sql = 'SELECT * FROM "request_history"';
        return new Promise<RequestHistory[]>((resolve, reject) => {
          this.handlers.connection.exec(sql, (err: any, rows: any[]) => {
            if (err) {
              reject(err);
            } else {
              const requestHistory: RequestHistory[] = rows.map(row => {
                return {
                  ID: row.ID,
                  USER: row.USER,
                  PARAMETERS: row.PARAMETERS,                 
                };
              });
              resolve(requestHistory);
            }
          });
        });
    }    
}
export interface RequestHistory {
  ID: Number;
  USER: String;
  PARAMETERS: String
}