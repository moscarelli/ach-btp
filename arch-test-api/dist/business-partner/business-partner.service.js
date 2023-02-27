"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerService = void 0;
const common_1 = require("@nestjs/common");
const business_partner_service_1 = require("../services/business-partner-service");
let BusinessPartnerService = class BusinessPartnerService {
    async getAllBusinessPartners() {
        const { addressEmailAddressApi } = (0, business_partner_service_1.businessPartnerService)();
        return await addressEmailAddressApi
            .requestBuilder()
            .getAll()
            .addCustomHeaders({ APIKey: '3Nz1GFkRbO5hPESGIeWPlEAB0Gk2PeTS' })
            .execute({
            url: 'https://sandbox.api.sap.com/s4hanacloud'
        });
    }
};
BusinessPartnerService = __decorate([
    (0, common_1.Injectable)()
], BusinessPartnerService);
exports.BusinessPartnerService = BusinessPartnerService;
//# sourceMappingURL=business-partner.service.js.map