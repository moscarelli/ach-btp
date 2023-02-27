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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const HanaDbConnectionHandler_1 = require("../Db/HanaDbConnectionHandler");
const RequestHistoryService_1 = require("../Db/RequestHistoryService");
const language_service_1 = require("./language.service");
let LanguageController = class LanguageController {
    constructor(dbConnetion, requestHistoryService, languageService) {
        this.dbConnetion = dbConnetion;
        this.requestHistoryService = requestHistoryService;
        this.languageService = languageService;
    }
    async GetRequests(language) {
        var data = await this.languageService.GetLanguageData(language);
        console.log("data", data);
        return data;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "GetRequests", null);
LanguageController = __decorate([
    (0, common_1.Controller)('language'),
    __metadata("design:paramtypes", [HanaDbConnectionHandler_1.HannaConnectionHandler, RequestHistoryService_1.RequestHistoryService, language_service_1.LanguageService])
], LanguageController);
exports.LanguageController = LanguageController;
//# sourceMappingURL=language.controller.js.map