import { HttpClient } from '@angular/common/http';
import { ApiRequestModel } from '../models/api-request.model';
import { apiMarvel } from '../constants/api-marvel.constant';
import { SearchDataRequest } from '../interfaces/requests/search-data-request.interface';
import { SearchReponse } from '../interfaces/responses/search-response.interface';
import { Character } from '../interfaces/entities/character.interface';
import { Creator } from '../interfaces/entities/creator.interface';
import { Comic } from '../interfaces/entities/comic.interface';
import { Events } from '../interfaces/entities/events.interface';
import { Serie } from '../interfaces/entities/serie.interface';
import { Story } from '../interfaces/entities/story.interface';
import { map, Observable, of, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchRepository {
  private _apiRequestModel = new ApiRequestModel(
    apiMarvel.baseUrl,
    apiMarvel.apiKey,
    apiMarvel.privateKey
  );

  constructor(private _httpClient: HttpClient) {}

  getCharacters(data: SearchDataRequest): Observable<Character[]> {
    const requestUrl = this._apiRequestModel.getUrl(data);

    return this._httpClient.get<SearchReponse<Character>>(requestUrl).pipe(
      map((response) => response.data.results),
      shareReplay()
    );
  }
}
