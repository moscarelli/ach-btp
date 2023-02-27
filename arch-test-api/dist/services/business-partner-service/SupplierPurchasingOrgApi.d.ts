import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';
import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { SupplierPartnerFuncApi } from './SupplierPartnerFuncApi';
import { SupplierPurchasingOrgTextApi } from './SupplierPurchasingOrgTextApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierPurchasingOrgApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SupplierPartnerFuncApi<DeSerializersT>,
        SupplierPurchasingOrgTextApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SupplierPurchasingOrg;
    requestBuilder(): SupplierPurchasingOrgRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SupplierPurchasingOrg, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_ORGANIZATION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        AUTOMATIC_EVALUATED_RCPT_SETTLMT: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        CALCULATION_SCHEMA_GROUP_CODE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELETION_INDICATOR: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_VERSION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_1: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_2: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        INTRASTAT_CRS_BORDER_TR_MODE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INVOICE_IS_GOODS_RECEIPT_BASED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        INVOICE_IS_MM_SERVICE_ENTRY_BASED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        MATERIAL_PLANNED_DELIVERY_DURN: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        MINIMUM_ORDER_AMOUNT: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        PAYMENT_TERMS: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PLANNING_CYCLE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRICING_DATE_CONTROL: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRODUCT_UNIT_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PUR_ORD_AUTO_GENERATION_IS_ALLOWED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PURCHASE_ORDER_CURRENCY: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PURCHASING_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PURCHASING_IS_BLOCKED_FOR_SUPPLIER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        ROUNDING_PROFILE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIPPING_CONDITION: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPLR_DISCOUNT_IN_KIND_IS_GRANTED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPLR_INVC_REVAL_IS_ALLOWED: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPLR_IS_RLVT_FOR_SETTLMT_MGMT: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SUPPLIER_ABC_CLASSIFICATION_CODE: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_ACCOUNT_NUMBER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_PHONE_NUMBER: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_RESP_SALES_PERSON_NAME: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_CONFIRMATION_CONTROL_KEY: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_ORDER_ACKN_RQD: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLIER_ACCOUNT_GROUP: OrderableEdmTypeField<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_PARTNER_FUNCTION: Link<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT, SupplierPartnerFuncApi<DeSerializersT>>;
        TO_PURCHASING_ORG_TEXT: Link<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT, SupplierPurchasingOrgTextApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SupplierPurchasingOrg<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
