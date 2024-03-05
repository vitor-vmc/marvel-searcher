import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './components/header/header.component';
import { GenericErrorComponent } from './components/generic-error/generic-error.component';

const components = [HeaderComponent, SearcherComponent, LoaderComponent, GenericErrorComponent];

const material = [MatAutocompleteModule, MatInputModule, MatIconModule, MatFormFieldModule, MatProgressSpinnerModule];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];

@NgModule({
  declarations: [components, LoaderComponent, HeaderComponent, GenericErrorComponent],
  imports: [material, modules],
  exports: [components, modules],
})
export class SharedModule {}
