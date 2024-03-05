import { SearchDataRequest } from "../interfaces/requests/search-data-request.interface";
import {Md5} from 'ts-md5';
export class ApiRequestModel {
    readonly BaseUrl: string;
    readonly apikey: string;
    readonly privateKey: string;

    private _queryMethods = {
        'searchAll': this.getQuerySearchAll,
        'searchById': this.getQuerySearchById,
        'searchInfoById': this.getQuerySearchInfoById,
    };

    constructor(baseUrl: string, apiKey: string, privateKey: string) {
        this.BaseUrl = baseUrl;
        this.apikey = apiKey;
        this.privateKey = privateKey;
    }

    getQuerySearchAll({ type, param, value, orderBy }: SearchDataRequest): string {
        return `/${type}?${param}=${value}&orderBy=${orderBy}`;
    }

    getQuerySearchById({ type, id }: SearchDataRequest): string {
        return `/${type}/${id}`;
    }

    getQuerySearchInfoById({ type, id, infoType }: SearchDataRequest): string {
        return `/${type}/${id}/${infoType}`;
    }

    getQuery(data: SearchDataRequest): string {
        const queryMethod = this._queryMethods[data.queryType];
        if (!queryMethod) {
            throw new Error('Invalid query type');
        }

        console.log('queryMethod: ', queryMethod.call(this, data));

        return queryMethod.call(this, data);
    }

    getAtuhParams(): string {
        const ts = new Date().getUTCMilliseconds();
        const md5 = new Md5();
        const hash =  md5.appendStr(`${ts}${this.privateKey}${this.apikey}`).end()  ;
        const authStr = `&ts=${ts}&apikey=${this.apikey}&hash=${hash}`;

        console.log('authStr: ', authStr);
        return authStr
    }

    getUrl(query: SearchDataRequest): string {
        return `${this.BaseUrl}${this.getQuery(query)}${this.getAtuhParams()}`;
    }
}
