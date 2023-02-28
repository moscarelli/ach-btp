"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
__exportStar(require("./AddressEmailAddress"), exports);
__exportStar(require("./AddressFaxNumber"), exports);
__exportStar(require("./AddressHomePageUrl"), exports);
__exportStar(require("./AddressPhoneNumber"), exports);
__exportStar(require("./BpAddrDepdntIntlLocNumber"), exports);
__exportStar(require("./BpContactToAddress"), exports);
__exportStar(require("./BpContactToFuncAndDept"), exports);
__exportStar(require("./BpCreditWorthiness"), exports);
__exportStar(require("./BpFinancialServicesExtn"), exports);
__exportStar(require("./BpFinancialServicesReporting"), exports);
__exportStar(require("./BpFiscalYearInformation"), exports);
__exportStar(require("./BpRelationship"), exports);
__exportStar(require("./BuPaAddressUsage"), exports);
__exportStar(require("./BuPaIdentification"), exports);
__exportStar(require("./BuPaIndustry"), exports);
__exportStar(require("./BusinessPartner"), exports);
__exportStar(require("./BusinessPartnerAddress"), exports);
__exportStar(require("./BusinessPartnerBank"), exports);
__exportStar(require("./BusinessPartnerContact"), exports);
__exportStar(require("./BusinessPartnerRating"), exports);
__exportStar(require("./BusinessPartnerRole"), exports);
__exportStar(require("./BusinessPartnerTaxNumber"), exports);
__exportStar(require("./BusPartAddrDepdntTaxNmbr"), exports);
__exportStar(require("./CustAddrDepdntExtIdentifier"), exports);
__exportStar(require("./CustAddrDepdntInformation"), exports);
__exportStar(require("./Customer"), exports);
__exportStar(require("./CustomerCompany"), exports);
__exportStar(require("./CustomerCompanyText"), exports);
__exportStar(require("./CustomerDunning"), exports);
__exportStar(require("./CustomerSalesArea"), exports);
__exportStar(require("./CustomerSalesAreaTax"), exports);
__exportStar(require("./CustomerSalesAreaText"), exports);
__exportStar(require("./CustomerTaxGrouping"), exports);
__exportStar(require("./CustomerText"), exports);
__exportStar(require("./CustomerUnloadingPoint"), exports);
__exportStar(require("./CustomerWithHoldingTax"), exports);
__exportStar(require("./CustSalesPartnerFunc"), exports);
__exportStar(require("./CustSlsAreaAddrDepdntInfo"), exports);
__exportStar(require("./CustSlsAreaAddrDepdntTaxInfo"), exports);
__exportStar(require("./CustUnldgPtAddrDepdntInfo"), exports);
__exportStar(require("./Supplier"), exports);
__exportStar(require("./SupplierCompany"), exports);
__exportStar(require("./SupplierCompanyText"), exports);
__exportStar(require("./SupplierDunning"), exports);
__exportStar(require("./SupplierPartnerFunc"), exports);
__exportStar(require("./SupplierPurchasingOrg"), exports);
__exportStar(require("./SupplierPurchasingOrgText"), exports);
__exportStar(require("./SupplierText"), exports);
__exportStar(require("./SupplierWithHoldingTax"), exports);
__exportStar(require("./AddressEmailAddressRequestBuilder"), exports);
__exportStar(require("./AddressFaxNumberRequestBuilder"), exports);
__exportStar(require("./AddressHomePageUrlRequestBuilder"), exports);
__exportStar(require("./AddressPhoneNumberRequestBuilder"), exports);
__exportStar(require("./BpAddrDepdntIntlLocNumberRequestBuilder"), exports);
__exportStar(require("./BpContactToAddressRequestBuilder"), exports);
__exportStar(require("./BpContactToFuncAndDeptRequestBuilder"), exports);
__exportStar(require("./BpCreditWorthinessRequestBuilder"), exports);
__exportStar(require("./BpFinancialServicesExtnRequestBuilder"), exports);
__exportStar(require("./BpFinancialServicesReportingRequestBuilder"), exports);
__exportStar(require("./BpFiscalYearInformationRequestBuilder"), exports);
__exportStar(require("./BpRelationshipRequestBuilder"), exports);
__exportStar(require("./BuPaAddressUsageRequestBuilder"), exports);
__exportStar(require("./BuPaIdentificationRequestBuilder"), exports);
__exportStar(require("./BuPaIndustryRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerAddressRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerBankRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerContactRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerRatingRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerRoleRequestBuilder"), exports);
__exportStar(require("./BusinessPartnerTaxNumberRequestBuilder"), exports);
__exportStar(require("./BusPartAddrDepdntTaxNmbrRequestBuilder"), exports);
__exportStar(require("./CustAddrDepdntExtIdentifierRequestBuilder"), exports);
__exportStar(require("./CustAddrDepdntInformationRequestBuilder"), exports);
__exportStar(require("./CustomerRequestBuilder"), exports);
__exportStar(require("./CustomerCompanyRequestBuilder"), exports);
__exportStar(require("./CustomerCompanyTextRequestBuilder"), exports);
__exportStar(require("./CustomerDunningRequestBuilder"), exports);
__exportStar(require("./CustomerSalesAreaRequestBuilder"), exports);
__exportStar(require("./CustomerSalesAreaTaxRequestBuilder"), exports);
__exportStar(require("./CustomerSalesAreaTextRequestBuilder"), exports);
__exportStar(require("./CustomerTaxGroupingRequestBuilder"), exports);
__exportStar(require("./CustomerTextRequestBuilder"), exports);
__exportStar(require("./CustomerUnloadingPointRequestBuilder"), exports);
__exportStar(require("./CustomerWithHoldingTaxRequestBuilder"), exports);
__exportStar(require("./CustSalesPartnerFuncRequestBuilder"), exports);
__exportStar(require("./CustSlsAreaAddrDepdntInfoRequestBuilder"), exports);
__exportStar(require("./CustSlsAreaAddrDepdntTaxInfoRequestBuilder"), exports);
__exportStar(require("./CustUnldgPtAddrDepdntInfoRequestBuilder"), exports);
__exportStar(require("./SupplierRequestBuilder"), exports);
__exportStar(require("./SupplierCompanyRequestBuilder"), exports);
__exportStar(require("./SupplierCompanyTextRequestBuilder"), exports);
__exportStar(require("./SupplierDunningRequestBuilder"), exports);
__exportStar(require("./SupplierPartnerFuncRequestBuilder"), exports);
__exportStar(require("./SupplierPurchasingOrgRequestBuilder"), exports);
__exportStar(require("./SupplierPurchasingOrgTextRequestBuilder"), exports);
__exportStar(require("./SupplierTextRequestBuilder"), exports);
__exportStar(require("./SupplierWithHoldingTaxRequestBuilder"), exports);
__exportStar(require("./BatchRequest"), exports);
__exportStar(require("./service"), exports);
//# sourceMappingURL=index.js.map