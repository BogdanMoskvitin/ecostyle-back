import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_service_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service.service-item': ServiceServiceItem;
    }
  }
}
