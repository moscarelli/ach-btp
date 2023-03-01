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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const language_service_1 = require("./language.service");
const authenticationMiddleware_1 = require("../authenticationMiddleware");
const common_2 = require("@nestjs/common");
const AllowUnauthorizedRequest = () => (0, common_2.SetMetadata)('allowUnauthorizedRequest', true);
let LanguageController = class LanguageController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    async GetRequests(request, language) {
        const user = request.user;
        const username = user ? user.id : 'anonymous';
        console.log("Username", username);
        var data = await this.languageService.GetLanguageData(language, username);
        return data;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], LanguageController.prototype, "GetRequests", null);
LanguageController = __decorate([
    (0, common_1.Controller)('language'),
    (0, common_1.UseGuards)(authenticationMiddleware_1.AuthenticationMiddleware),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
exports.LanguageController = LanguageController;
//# sourceMappingURL=language.controller.js.map