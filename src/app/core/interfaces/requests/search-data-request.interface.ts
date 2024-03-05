export interface SearchDataRequest {
    type: string;
    param?: string;
    value?: string;
    id?: number;
    orderBy: 'name';
    infoType?: string;
    queryType: 'searchAll' | 'searchById' | 'searchInfoById';
}