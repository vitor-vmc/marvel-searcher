import {
  ImageInfo,
  Details,
  Item,
  Price,
  TextObject,
  Thumbnail,
  Url,
} from '../responses/commom-response.interface';

export interface Comic {
  id: string;
  digitalId: string;
  title: string;
  issueNumber: string;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: string;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Item;
  variants: Item[];
  collections: Item[];
  collectedIssues: Item[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: ImageInfo[];
  creators: Details;
  characters: Details;
  stories: Details;
  events: Details;
}
