import { Injectable } from '@angular/core';
import { SearchRepository } from '../repositories/search.repository';
import { SearchDataRequest } from '../interfaces/requests/search-data-request.interface';
import { Observable, throwError, catchError, finalize, map, tap } from 'rxjs';
import { Character } from '../interfaces/entities/character.interface';
import { SearcherStateService } from './searcher-state.service';
@Injectable({
  providedIn: 'root',
})
export class SearcherService extends SearcherStateService {
  constructor(private _searchRepository: SearchRepository) {
    super();
  }

  private handleError(error: any): Observable<never> {
    this.errorSubject.next(true);
    return throwError(
      () =>
        new Error(
          'Algo deu errado. Por favor, tente novamente mais tarde.',
          error
        )
    );
  }

  getCharactersByParams(searchData: SearchDataRequest) {
    console.log('getChargetCharactersByParamsacters: ', searchData);

    this.loadingSubject.next(true);
    this.errorSubject.next(false);

    this._searchRepository.getCharacters(searchData).subscribe({
      next: (response: Character[]) => {
        console.log('response: ', response[0]);
        this.characterSubject.next(response);
      },
      error: (error) => {
        this.handleError(error);
      },
      complete: () => {
        this.loadingSubject.next(false);
      }
    });
  }

  getComicsByParams(searchData: SearchDataRequest) {
    this._searchRepository.getComics(searchData);
  }
  getCreatorsByParams(searchData: SearchDataRequest) {
    this._searchRepository.getCreators(searchData);
  }

  getEventsByParams(searchData: SearchDataRequest) {
    this._searchRepository.getEvents(searchData);
  }

  getSeriesByParams(searchData: SearchDataRequest) {
    this._searchRepository.getSeries(searchData);
  }

  getStoriesByParams(searchData: SearchDataRequest) {
    this._searchRepository.getStories(searchData);
  }
}
