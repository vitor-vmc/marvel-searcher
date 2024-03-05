export interface Url {
  type: string;
  url: string;
}

export interface Date {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ImageInfo {
  path: string;
  extension: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Details {
  available: string;
  returned: string;
  collectionURI: string;
  items: Item[];
}

export interface Item {
  resourceURI?: string;
  name?: string;
  type?: string;
  role?: string;
}
