import type { Schema, Struct } from '@strapi/strapi';

export interface FeatureFeatureLists extends Struct.ComponentSchema {
  collectionName: 'components_feature_feature_lists';
  info: {
    description: '';
    displayName: 'FeatureLists';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'feature.feature-lists': FeatureFeatureLists;
    }
  }
}
