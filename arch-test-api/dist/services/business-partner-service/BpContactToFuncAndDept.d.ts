import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpContactToFuncAndDeptApi } from './BpContactToFuncAndDeptApi';
export declare class BpContactToFuncAndDept<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpContactToFuncAndDeptType<T> {
    readonly _entityApi: BpContactToFuncAndDeptApi<T>;
    static _entityName: string;
    static _defaultServicePath: string;
    static _keys: string[];
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    contactPersonFunction?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonDepartment?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BpContactToFuncAndDeptApi<T>);
}
export interface BpContactToFuncAndDeptType<T extends DeSerializers = DefaultDeSerializers> {
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    contactPersonFunction?: DeserializedType<T, 'Edm.String'> | null;
    contactPersonDepartment?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    faxNumber?: DeserializedType<T, 'Edm.String'> | null;
    faxNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
    emailAddress?: DeserializedType<T, 'Edm.String'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
}
