import { Url, Thumbnail, Details, Item } from "../responses/commom-response.interface"

export interface Serie {
  id: string
  title: string
  description: string
  resourceURI: string
  urls: Url[]
  startYear: string
  endYear: string
  rating: string
  modified: string
  thumbnail: Thumbnail
  comics: Details
  stories: Details
  events: Details
  characters: Details
  creators: Details
  next: Item
  previous: Item
  }