import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../../interfaces/entities/character.interface';

@Injectable({
  providedIn: 'root',
})
export class SearcherStateService {

  private _loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this._loadingSubject.asObservable();

  private _errorSubject = new BehaviorSubject<boolean>(false);
  public error$ = this._errorSubject.asObservable();

  private _characterSubject = new BehaviorSubject<Character | null>(null);
  character$ = this._characterSubject.asObservable();
  
  constructor() {}

  public get loadingSubject() {
    return this._loadingSubject;
  }
  public set loadingSubject(value) {
    this._loadingSubject = value;
  }

  public get errorSubject() {
    return this._errorSubject;
  }
  public set errorSubject(value) {
    this._errorSubject = value;
  }

  public get characterSubject() {
    return this._characterSubject;
  }
  public set characterSubject(value) {
    this._characterSubject = value;
  }
}