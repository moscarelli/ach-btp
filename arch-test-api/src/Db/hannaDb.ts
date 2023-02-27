import * as hana from '@sap/hana-client';
import { disconnect } from 'process';



export function getdata()
{

const connection = hana.createConnection();

const connParams = {
    serverNode: process.env.HANNA_DB_NODE,  
    uid: process.env.HANNA_DB_USER,  
    pwd: process.env.HANNA_DB_PASSWORD 
  };

    connection.connect(connParams, (err: any) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to SAP HANA database');
        const sql = 'SELECT * FROM "request_history"';

        connection.exec(sql, (err: any, rows: any[]) => {
          if (err) {
            console.error(err);
          } else {
            console.log(rows);
            connection.disconnect((err: any) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log('Disconnected from SAP HANA database');
                }
              });
          }
        });
    }
    });
  
}


