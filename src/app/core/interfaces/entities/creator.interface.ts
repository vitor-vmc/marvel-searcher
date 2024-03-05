import { Details, Thumbnail, Url } from "../responses/commom-response.interface"

export interface Creator {
    id: string
    firstName: string
    middleName: string
    lastName: string
    suffix: string
    fullName: string
    modified: string
    resourceURI: string
    urls: Url[]
    thumbnail: Thumbnail
    series: Details
    stories: Details
    comics: Details
    events: Details
}