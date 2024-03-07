import { Component } from '@angular/core';
import { StoreService } from '../../../core/services/store/store.service';
import { SearcherService } from '../../../core/services/searcher/searcher.service';
@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrl: './historic.component.scss'
})
export class HistoricComponent {

  loading$ = this._searcherService.loading$;
  historicList$ = this._storeService.charactersListStore$;
  character$ = this._storeService.historicItemSubject$;

  constructor(private _storeService: StoreService, private _searcherService: SearcherService) { }
}
