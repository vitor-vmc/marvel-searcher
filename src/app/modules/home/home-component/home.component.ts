import { Component, OnInit } from '@angular/core';
import { SearcherService } from '../../../core/services/searcher/searcher.service';
import { StoreService } from '../../../core/services/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  
  loading$ = this._searchService.loading$;
  error$ = this._searchService.error$;
  searchResult$ = this._searchService.results$;
  character$ = this._searchService.character$;

  constructor(private _searchService: SearcherService, private _storeService: StoreService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._storeService.charactersListStore$.subscribe((data) => {
      console.log('aaaaaaa', data);
    });
  }
}
