import { Injectable } from '@angular/core';
import { SearchRepository } from '../repositories/search.repository';
import { SearchDataRequest } from '../interfaces/requests/search-data-request.interface';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  constructor(private _searchRepository: SearchRepository) { }

     // let request: SearchRequest = {
    //   type: 'characters',
    //   param: param,
    //   value: value,
    //   orderBy: 'name'
    // }

        // let request: SearchRequest = {
    //   type: type,
    //   id: parseInt(id),
    //   orderBy: 'name',
    //   infoType: infoType
    // }


  getCharactersByParams(searchData: SearchDataRequest) {
    this._searchRepository.getCharacters(searchData);
  }

  getComicsByParams(searchData: SearchDataRequest) {
    this._searchRepository.getComics(searchData);
  }

  getCreatorsByParams(searchData: SearchDataRequest) {
    this._searchRepository.getCreators(searchData);
  }

  getEventsByParams(searchData: SearchDataRequest) {
    this._searchRepository.getEvents(searchData);
  }

  getSeriesByParams(searchData: SearchDataRequest) {
    this._searchRepository.getSeries(searchData);
  }

  getStoriesByParams(searchData: SearchDataRequest) {
    this._searchRepository.getStories(searchData);
  }
}
