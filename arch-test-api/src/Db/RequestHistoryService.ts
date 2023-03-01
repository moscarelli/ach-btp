import { Injectable } from '@nestjs/common';
import { HannaConnectionHandler } from "./HanaDbConnectionHandler";

@Injectable()
export class RequestHistoryService {  

    private handlers :HannaConnectionHandler ;
    constructor(connectionhandler:HannaConnectionHandler) {
        this.handlers = connectionhandler;
      }


    async getAll(): Promise<RequestHistory[]> {
        const sql = 'SELECT * FROM "request_history"';
        return new Promise<RequestHistory[]>((resolve, reject) => {
          this.handlers.connection.exec(sql, (err: any, rows: any[]) => {
            if (err) {
              reject(err);
            } else {
              console.log("rows", rows)
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
  
    async insertHistory (user :string, parameter :string){
      const sql =`insert into "request_history" (USER,PARAMETERS) values ('${user}', '${parameter}')`
      console.log("sql", sql)
      return new Promise<any>((resolve, reject) => {
        this.handlers.connection.exec(sql, (err: any, rows: any[]) => {
          if (err) {
            console.log("Insert Failed", err)            
            reject(err);
          } else {
            console.log("Insert ok")            
            resolve(rows);
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