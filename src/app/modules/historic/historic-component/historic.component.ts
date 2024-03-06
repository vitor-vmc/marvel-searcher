import { Component } from '@angular/core';
import { of } from 'rxjs';
import { characterMock } from '../../../core/mocks/character.mock';
@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrl: './historic.component.scss'
})
export class HistoricComponent {

  information$ = of(characterMock);

}
