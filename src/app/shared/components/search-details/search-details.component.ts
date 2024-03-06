import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../core/interfaces/entities/character.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrl: './search-details.component.scss'
})
export class SearchDetailsComponent{
  panelOpenState = false;
  displayedColumns: string[] = ['name', 'uri'];


  @Input() information$ = new Observable<Character | null>;

  constructor() {

  }
}