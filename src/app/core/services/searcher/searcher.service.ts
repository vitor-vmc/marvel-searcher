import { Injectable } from '@angular/core';
import { SearchRepository } from '../../repositories/search.repository';
import { SearchDataRequest } from '../../interfaces/requests/search-data-request.interface';
import { Observable, throwError} from 'rxjs';
import { Character } from '../../interfaces/entities/character.interface';
import { SearcherStateService } from '../searcher-state/searcher-state.service';
import { StoreService } from '../store/store.service';
@Injectable({
  providedIn: 'root',
})
export class SearcherService extends SearcherStateService {
  constructor(private _searchRepository: SearchRepository, private _storeService: StoreService) {
    super();
  }

  private handleError(error: any): Observable<never> {
    this.loadingSubject.next(false);
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
        this._storeService.addCharacterToListStore(response[0]);
        this.characterSubject.next(response[0]);
      },
      error: (error) => {
        this.handleError(error);
      },
      complete: () => {
        this.loadingSubject.next(false);
      }
    });
  }

  getCharactersFromStore(name: string) {

    this.loadingSubject.next(true);

    if (this._storeService.checkIfCharacterExistsInListStore(name)) {
      const character = this._storeService.getCharacterFromListStore(name);
      this.characterSubject.next(character);
    }

    this.loadingSubject.next(false);
  }
}
