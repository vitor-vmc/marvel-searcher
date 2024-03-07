import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../../interfaces/entities/character.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _characterListStoreSubject = new BehaviorSubject<Character[]>([]);
  charactersListStore$ = this._characterListStoreSubject.asObservable();

  private _historicItemSubject = new BehaviorSubject<Character | null>(null);
  historicItemSubject$ = this._historicItemSubject.asObservable();

  constructor(
    private _localStorageService: LocalStorageService,
  ) {}

  addCharacterToListStore(character: Character): void {
    const characterList = this._characterListStoreSubject.getValue();
    const existingCharacter = characterList.find(c => c.id === character.id);
    if (existingCharacter) {
      return;
    }
    const updatedList = [...characterList, character];
    this._localStorageService.setItem('historic', updatedList);
    this._characterListStoreSubject.next(updatedList);
  }

  checkIfCharacterExistsInListStore(name: string): boolean {
    const characterList = this._characterListStoreSubject.getValue();
    const character = characterList.find(c => c.name === name);
    return !!character;
  }

  getCharacterFromListStore(name: string): Character {
    const characterList = this._characterListStoreSubject.getValue();
    return characterList.find(c => c.name === name) as Character;
  }

  setHistoricItem(id: number): void {
    const characterList = this._localStorageService.getItem('historic') as Character[];

    if (!characterList) {
      this._historicItemSubject.next(null);
      return;
    }

    const character = characterList.find(c => c.id === id) as Character;
    this._historicItemSubject.next(character);
  }
}
