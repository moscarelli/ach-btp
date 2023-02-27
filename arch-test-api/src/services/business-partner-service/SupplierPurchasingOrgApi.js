"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SupplierPurchasingOrg_1 = require("./SupplierPurchasingOrg");
const SupplierPurchasingOrgRequestBuilder_1 = require("./SupplierPurchasingOrgRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrgApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierPurchasingOrg_1.SupplierPurchasingOrg;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARTNER_FUNCTION: new odata_v2_1.Link('to_PartnerFunction', this, linkedApis[0]),
            TO_PURCHASING_ORG_TEXT: new odata_v2_1.Link('to_PurchasingOrgText', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierPurchasingOrgRequestBuilder_1.SupplierPurchasingOrgRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link supplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                /**
                 * Static representation of the {@link purchasingOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false),
                /**
                 * Static representation of the {@link automaticEvaluatedRcptSettlmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTOMATIC_EVALUATED_RCPT_SETTLMT: fieldBuilder.buildEdmTypeField('AutomaticEvaluatedRcptSettlmt', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link calculationSchemaGroupCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALCULATION_SCHEMA_GROUP_CODE: fieldBuilder.buildEdmTypeField('CalculationSchemaGroupCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link deletionIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link evaldReceiptSettlementIsActive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE: fieldBuilder.buildEdmTypeField('EvaldReceiptSettlementIsActive', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link incotermsClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsTransferLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsSupChnLoc1AddlUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link incotermsSupChnLoc2AddlUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link incotermsSupChnDvtgLocAddlUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link intrastatCrsBorderTrMode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTRASTAT_CRS_BORDER_TR_MODE: fieldBuilder.buildEdmTypeField('IntrastatCrsBorderTrMode', 'Edm.String', true),
                /**
                 * Static representation of the {@link invoiceIsGoodsReceiptBased} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVOICE_IS_GOODS_RECEIPT_BASED: fieldBuilder.buildEdmTypeField('InvoiceIsGoodsReceiptBased', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link invoiceIsMmServiceEntryBased} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVOICE_IS_MM_SERVICE_ENTRY_BASED: fieldBuilder.buildEdmTypeField('InvoiceIsMMServiceEntryBased', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link materialPlannedDeliveryDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_PLANNED_DELIVERY_DURN: fieldBuilder.buildEdmTypeField('MaterialPlannedDeliveryDurn', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link minimumOrderAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMUM_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField('MinimumOrderAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link paymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link planningCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNING_CYCLE: fieldBuilder.buildEdmTypeField('PlanningCycle', 'Edm.String', true),
                /**
                 * Static representation of the {@link pricingDateControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICING_DATE_CONTROL: fieldBuilder.buildEdmTypeField('PricingDateControl', 'Edm.String', true),
                /**
                 * Static representation of the {@link prodStockAndSlsDataTransfPrfl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL: fieldBuilder.buildEdmTypeField('ProdStockAndSlsDataTransfPrfl', 'Edm.String', true),
                /**
                 * Static representation of the {@link productUnitGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_UNIT_GROUP: fieldBuilder.buildEdmTypeField('ProductUnitGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link purOrdAutoGenerationIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PUR_ORD_AUTO_GENERATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PurOrdAutoGenerationIsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link purchaseOrderCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_CURRENCY: fieldBuilder.buildEdmTypeField('PurchaseOrderCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_GROUP: fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingIsBlockedForSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PurchasingIsBlockedForSupplier', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link roundingProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', true),
                /**
                 * Static representation of the {@link shippingCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                /**
                 * Static representation of the {@link suplrDiscountInKindIsGranted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPLR_DISCOUNT_IN_KIND_IS_GRANTED: fieldBuilder.buildEdmTypeField('SuplrDiscountInKindIsGranted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link suplrInvcRevalIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPLR_INVC_REVAL_IS_ALLOWED: fieldBuilder.buildEdmTypeField('SuplrInvcRevalIsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link suplrIsRlvtForSettlmtMgmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPLR_IS_RLVT_FOR_SETTLMT_MGMT: fieldBuilder.buildEdmTypeField('SuplrIsRlvtForSettlmtMgmt', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link suplrPurgOrgIsRlvtForPriceDetn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN: fieldBuilder.buildEdmTypeField('SuplrPurgOrgIsRlvtForPriceDetn', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supplierAbcClassificationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ABC_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField('SupplierABCClassificationCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierAccountNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField('SupplierAccountNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierPhoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('SupplierPhoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierRespSalesPersonName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_RESP_SALES_PERSON_NAME: fieldBuilder.buildEdmTypeField('SupplierRespSalesPersonName', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierConfirmationControlKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_CONFIRMATION_CONTROL_KEY: fieldBuilder.buildEdmTypeField('SupplierConfirmationControlKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link isOrderAcknRqd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_ORDER_ACKN_RQD: fieldBuilder.buildEdmTypeField('IsOrderAcknRqd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierAccountGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPurchasingOrg_1.SupplierPurchasingOrg)
            };
        }
        return this._schema;
    }
}
exports.SupplierPurchasingOrgApi = SupplierPurchasingOrgApi;
//# sourceMappingURL=SupplierPurchasingOrgApi.js.map