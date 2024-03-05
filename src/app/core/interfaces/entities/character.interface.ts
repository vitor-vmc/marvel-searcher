import { Thumbnail, Details, Url } from "../responses/commom-response.interface";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Details;
  series: Details;
  stories: Details;
  events: Details;
  urls: Url[];
}