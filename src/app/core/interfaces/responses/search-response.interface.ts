export interface SearchReponse <T> {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: Data<T>
  etag: string
}

export interface Data<T> {
  offset: string
  limit: string
  total: string
  count: string
  results: T[]
}














