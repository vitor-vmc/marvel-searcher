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

const components = [SearcherComponent, LoaderComponent];

const material = [MatAutocompleteModule, MatInputModule, MatIconModule, MatFormFieldModule, MatProgressSpinnerModule];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];

@NgModule({
  declarations: [components, LoaderComponent],
  imports: [material, modules],
  exports: [components, modules],
})
export class SharedModule {}
