import type { Graph, Organization, WebSite, WithContext } from "schema-dts";

export type JsonLdGraph = Graph;
export type OrganizationSchema = WithContext<Organization>;
export type WebSiteSchema = WithContext<WebSite>;

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}
