import { Component, Input } from '@angular/core';
import { StoreService } from '../../../core/services/store/store.service';
import { SearcherService } from '../../../core/services/searcher/searcher.service';
import { Character } from '../../../core/interfaces/entities/character.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.scss'
})
export class ResultListComponent {

  @Input() isFromHistoric: boolean = false;
  @Input() results$ = new Observable<Character[]>()

  constructor(
    private _searchService: SearcherService, private _storeService: StoreService
  ) { 
  }

  redirectToDetails(character: Character) {
    this._searchService.getCharactersFromStore(character.name);
  }

  redirectToHistoricDetails(character: Character) {
    
  }
}
