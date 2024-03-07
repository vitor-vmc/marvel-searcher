import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable} from "rxjs";
import { SearcherService } from "../../../core/services/searcher/searcher.service";
import { SearchDataRequest } from "../../../core/interfaces/requests/search-data-request.interface";
import { StoreService } from "../../../core/services/store/store.service";


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent{
  searchTerm: string = '';
  results$ = this._storeService.charactersListStore$;

  constructor(
    private _searchService: SearcherService,
    private _storeService: StoreService
  ) {
}

  get searchControl(): FormControl {
    return new FormControl(this.searchTerm);
  }

  onSearchInput(): void {
    this.getCharacters(this.searchTerm);
  }

  onOptionSelected(): void {
    let character = this.searchTerm.valueOf();
    this.searchTerm = '';
    this._searchService.getCharactersFromStore(character);
  }

  getCharacters(name: string): void {
    console.log('getCharacters')
    const data: SearchDataRequest = {
      type: 'characters',
      param: 'nameStartsWith',
      value: name,
      orderBy: 'name',
      queryType: 'searchAll'
    }

    this.searchTerm = '';
    this._searchService.getCharactersByParams(data);
  }
}
