import { Injectable } from '@nestjs/common';
import * as hana from '@sap/hana-client';
import { disconnect } from 'process';



export function getdata()
{

const connection = hana.createConnection();

// const connParams = {
//   serverNode: 'cb9b51a3-16ef-4c23-bebb-c743945fe06a.hana.trial-us10.hanacloud.ondemand.com:443',  
//   uid: 'DBADMIN',
//   pwd: 'SapTest1'  
// };
const connParams = {
    serverNode: process.env.HANNA_DB_NODE,  
    uid: process.env.HANNA_DB_USER,  
    pwd: process.env.HANNA_DB_PASSWORD 
  };
console.log("DB Params",connParams);

//'serverNode=cb9b51a3-16ef-4c23-bebb-c743945fe06a.hana.trial-us10.hanacloud.ondemand.com:443;uid=DBADMIN;pwd=SapTest1'

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


