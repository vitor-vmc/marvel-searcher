import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../core/services/store/store.service';
import { Observable, of } from 'rxjs';
import { Character } from '../../../core/interfaces/entities/character.interface';

@Component({
  selector: 'app-historic-item',
  templateUrl: './historic-item.component.html',
  styleUrl: './historic-item.component.scss'
})
export class HistoricItemComponent implements OnInit{

  historicItem$ = this._store.historicItemSubject$;

  constructor(
    private _store: StoreService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadHistoricItem();
  }

  loadHistoricItem(): void {
    this._activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this._store.setHistoricItem(id);
    });
  }
}
