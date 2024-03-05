import { Details, Item, Thumbnail } from "../responses/commom-response.interface"

export interface Story {
  id: string
  title: string
  description: string
  resourceURI: string
  type: string
  modified: string
  thumbnail: Thumbnail
  comics: Details
  series: Details
  events: Details
  characters: Details
  creators: Details
  originalissue: Item
  }