"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HannaConnectionHandler = void 0;
const common_1 = require("@nestjs/common");
const hana = require("@sap/hana-client");
let HannaConnectionHandler = class HannaConnectionHandler {
    constructor() {
        this.connParams = {
            serverNode: process.env.HANNA_DB_NODE,
            uid: process.env.HANNA_DB_USER,
            pwd: process.env.HANNA_DB_PASSWORD
        };
        this.connect();
    }
    connect() {
        this.connection = hana.createConnection();
        this.connection.connect(this.connParams, (err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log('Connected to SAP HANA database');
            }
        });
    }
    disconect() {
        this.connection.disconnect((err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log('Connection Hana Database Closed');
            }
        });
    }
};
HannaConnectionHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], HannaConnectionHandler);
exports.HannaConnectionHandler = HannaConnectionHandler;
//# sourceMappingURL=HanaDbConnectionHandler.js.map