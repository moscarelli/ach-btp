import { Injectable } from '@nestjs/common';
import * as hana from '@sap/hana-client';

@Injectable()
export class HannaConnectionHandler {
    public connection: hana.Connection;

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
