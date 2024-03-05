import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearcherService } from '../../../core/services/searcher.service';
import { SearchDataRequest } from '../../../core/interfaces/requests/search-data-request.interface';
import { Character } from '../../../core/interfaces/entities/character.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  
  loading$ = this._searchService.loading$;
  error$ = this._searchService.error$;
  searchResult$ = this._searchService.character$;


  constructor(private _searchService: SearcherService) { }

  ngOnInit(): void {
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
