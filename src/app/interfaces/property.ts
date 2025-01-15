export interface Property {
  id: number;
  name: string;
  bedrooms: number;
  bathroom: number;
  area: number;
  description: string;
  country: string;
  state: string;
  city: string;
  propertyTransferTax: number | null;
  legalFees: number | null;
  homeInspection: number | null;
  propertyInsurance: number | null;
  mortgageFees: number | null;
  propertyTaxes: number | null;
  homeownersAssociationFee: number | null;
  listingPrice: number;
  featuresAndAmenities: string[];
  houseImgs: string[];
}
