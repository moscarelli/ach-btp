import { Injectable } from '@nestjs/common';
import {
    businessPartnerService,    
    AddressEmailAddress
  } from '../services/business-partner-service';

@Injectable()
export class BusinessPartnerService {

    async getAllBusinessPartners(): Promise<AddressEmailAddress[]> {
        const { addressEmailAddressApi } = businessPartnerService();
        return await addressEmailAddressApi
          .requestBuilder()
          .getAll()
          .addCustomHeaders({ APIKey: '3Nz1GFkRbO5hPESGIeWPlEAB0Gk2PeTS' })
          .execute({
            url: 'https://sandbox.api.sap.com/s4hanacloud'
          });
      }
}

