import { Injectable } from '@nestjs/common';
import * as hana from '@sap/hana-client';
import { disconnect } from 'process';
import {RequestHistory}  from './RequestHistory'

@Injectable()
export class HannaConnectionHandler {
    private connection: hana.Connection;

    private connParams = {
        serverNode: process.env.HANNA_DB_NODE,  
        uid: process.env.HANNA_DB_USER,  
        pwd: process.env.HANNA_DB_PASSWORD 
    };
    
    constructor() {
        this.connect();
      }
    

     private connect() {
        this.connection = hana.createConnection();
        this.connection.connect(this.connParams, (err: any) => {
            if (err) {
              console.error(err);
            } else {
              console.log('Connected to SAP HANA database');
            }
          });
     }
    

    async GetConnection(): Promise<any[]> {
        return this.connection.connect(this.connParams, err =>{
            if(err){
                console.log(err);
            }  
            else{
                console.log("Hanna DB Async Connection OK")
            }
        });
    }
   
    async executeQuery(): Promise<RequestHistory[]> {
        const sql = 'SELECT * FROM "request_history"';
        return new Promise<RequestHistory[]>((resolve, reject) => {
          this.connection.exec(sql, (err: any, rows: any[]) => {
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

    private disconect(){
     this.connection.disconnect((err: any) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Connection Hana Database Closed');
        }
      });
    }
}
