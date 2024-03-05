import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearcherService } from '../../core/services/searcher.service';
import { SearchDataRequest } from '../../core/interfaces/requests/search-data-request.interface';
import { Character } from '../../core/interfaces/entities/character.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  
  loading$ = this._searchService.loading$;
  error$ = this._searchService.error$;
  character: Character[] | null = null;

  private _subscriptions: Subscription[] = [];

  constructor(private _searchService: SearcherService) { }

  ngOnInit(): void {
    this._subscriptions.push(
      this._searchService.character$.subscribe((character) => (this.character = character))
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getCharacters(): void {

    console.log('getCharacters')

    const data: SearchDataRequest = {
      type: 'characters',
      param: 'name',
      value: 'magneto',
      orderBy: 'name',
      queryType: 'searchAll'
    }
    this._searchService.getCharactersByParams(data);
  }

  getCharactersById(): void {

      const data: SearchDataRequest = {
      type: 'characters',
      id: parseInt('1009624'),
      orderBy: 'name',
      queryType: 'searchById'
    }

    this._searchService.getCharactersByParams(data);
  }
}
