"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToAddressApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BpContactToAddress_1 = require("./BpContactToAddress");
const BpContactToAddressRequestBuilder_1 = require("./BpContactToAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpContactToAddress_1.BpContactToAddress;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_EMAIL_ADDRESS: new odata_v2_1.Link('to_EmailAddress', this, linkedApis[0]),
            TO_FAX_NUMBER: new odata_v2_1.Link('to_FaxNumber', this, linkedApis[1]),
            TO_MOBILE_PHONE_NUMBER: new odata_v2_1.Link('to_MobilePhoneNumber', this, linkedApis[2]),
            TO_PHONE_NUMBER: new odata_v2_1.Link('to_PhoneNumber', this, linkedApis[3]),
            TO_URL_ADDRESS: new odata_v2_1.Link('to_URLAddress', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new BpContactToAddressRequestBuilder_1.BpContactToAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpContactToAddress_1.BpContactToAddress, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link relationshipNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELATIONSHIP_NUMBER: fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerCompany} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_COMPANY: fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessPartnerPerson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_PERSON: fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                /**
                 * Static representation of the {@link addressNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_NUMBER: fieldBuilder.buildEdmTypeField('AddressNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalStreetPrefixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField('AdditionalStreetPrefixName', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalStreetSuffixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField('AdditionalStreetSuffixName', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressTimeZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true),
                /**
                 * Static representation of the {@link careOfName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARE_OF_NAME: fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true),
                /**
                 * Static representation of the {@link cityCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_CODE: fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link cityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link county} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryServiceNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryServiceTypeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link district} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRICT: fieldBuilder.buildEdmTypeField('District', 'Edm.String', true),
                /**
                 * Static representation of the {@link formOfAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link fullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FULL_NAME: fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link homeCityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOME_CITY_NAME: fieldBuilder.buildEdmTypeField('HomeCityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseNumberSupplementText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBox} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxDeviatingCityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxDeviatingCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxDeviatingRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxIsWithoutNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link poBoxLobbyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true),
                /**
                 * Static representation of the {@link poBoxPostalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link person} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true),
                /**
                 * Static representation of the {@link postalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link prfrdCommMediumType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetPrefixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField('StreetPrefixName', 'Edm.String', true),
                /**
                 * Static representation of the {@link streetSuffixName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField('StreetSuffixName', 'Edm.String', true),
                /**
                 * Static representation of the {@link taxJurisdiction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true),
                /**
                 * Static representation of the {@link transportZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressRepresentationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactRelationshipFunction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_RELATIONSHIP_FUNCTION: fieldBuilder.buildEdmTypeField('ContactRelationshipFunction', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactRelationshipDepartment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_RELATIONSHIP_DEPARTMENT: fieldBuilder.buildEdmTypeField('ContactRelationshipDepartment', 'Edm.String', true),
                /**
                 * Static representation of the {@link floor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactPersonBuilding} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_PERSON_BUILDING: fieldBuilder.buildEdmTypeField('ContactPersonBuilding', 'Edm.String', true),
                /**
                 * Static representation of the {@link roomNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOM_NUMBER: fieldBuilder.buildEdmTypeField('RoomNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactPersonPrfrdCommMedium} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_PERSON_PRFRD_COMM_MEDIUM: fieldBuilder.buildEdmTypeField('ContactPersonPrfrdCommMedium', 'Edm.String', true),
                /**
                 * Static representation of the {@link correspondenceShortName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRESPONDENCE_SHORT_NAME: fieldBuilder.buildEdmTypeField('CorrespondenceShortName', 'Edm.String', true),
                /**
                 * Static representation of the {@link inhouseMail} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INHOUSE_MAIL: fieldBuilder.buildEdmTypeField('InhouseMail', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpContactToAddress_1.BpContactToAddress)
            };
        }
        return this._schema;
    }
}
exports.BpContactToAddressApi = BpContactToAddressApi;
//# sourceMappingURL=BpContactToAddressApi.js.map