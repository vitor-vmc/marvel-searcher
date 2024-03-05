import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../core/interfaces/entities/character.interface';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrl: './search-details.component.scss'
})
export class SearchDetailsComponent implements OnInit{

  information = {} as Character;
  @Input() data = {} as Character;

  constructor() {
  }

  ngOnInit(): void {
    this.information = this.data;
  }

}
