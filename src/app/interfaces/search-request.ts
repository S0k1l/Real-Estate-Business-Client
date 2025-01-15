export interface SearchRequest {
  name: string | null;
  location: string | null;
  propertyTypeId: number | null;
  pricingRange: number | null;
  propertySize: number | null;
}
