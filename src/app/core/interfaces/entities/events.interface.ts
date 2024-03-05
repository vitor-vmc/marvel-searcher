import { Url, Thumbnail, Details, Item } from "../responses/commom-response.interface"

export interface Events {
  id: string
  title: string
  description: string
  resourceURI: string
  urls: Url[]
  modified: string
  start: string
  end: string
  thumbnail: Thumbnail
  comics: Details
  stories: Details
  series: Details
  characters: Details
  creators: Details
  next: Item
  previous: Item
  }