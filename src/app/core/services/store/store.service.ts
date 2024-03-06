import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../../interfaces/entities/character.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _characterListStoreSubject = new BehaviorSubject<Character[]>([]);
  charactersListStore$ = this._characterListStoreSubject.asObservable();

  constructor() {}

  public get charactersListStoreSubject() {
    return this._characterListStoreSubject;
  }
  public set charactersListStoreSubject(value) {
    this._characterListStoreSubject = value;
  }

  addCharacterToListStore(character: Character): void {
    const characterList = this._characterListStoreSubject.getValue();
    const existingCharacter = characterList.find(c => c.id === character.id);
    if (existingCharacter) {
      return;
    }
    const updatedList = [...characterList, character];
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
}
