import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherService } from './services/searcher.service';
import { SearchRepository } from './repositories/search.repository';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SearcherService, SearchRepository,provideHttpClient()],
})
export class CoreModule { }
