"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const language_service_1 = require("./language/language.service");
const language_controller_1 = require("./language/language.controller");
const config_1 = require("@nestjs/config");
const HanaDbConnectionHandler_1 = require("./Db/HanaDbConnectionHandler");
const RequestHistoryService_1 = require("./Db/RequestHistoryService");
const authenticationMiddleware_1 = require("./authenticationMiddleware");
const health_check_controller_1 = require("./health-check/health-check.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(authenticationMiddleware_1.AuthenticationMiddleware)
            .forRoutes('/language');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            axios_1.HttpModule],
        controllers: [app_controller_1.AppController, language_controller_1.LanguageController, health_check_controller_1.HealthCheckController],
        providers: [app_service_1.AppService, language_service_1.LanguageService, HanaDbConnectionHandler_1.HannaConnectionHandler, RequestHistoryService_1.RequestHistoryService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map