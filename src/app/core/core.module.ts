import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherService } from './services/searcher/searcher.service';
import { SearchRepository } from './repositories/search.repository';
import { provideHttpClient } from '@angular/common/http';
import { StoreService } from './services/store/store.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SearcherService, SearchRepository, StoreService, provideHttpClient()],
})
export class CoreModule { }
