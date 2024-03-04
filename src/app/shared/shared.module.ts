import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
const components = [SearcherComponent];

const material = [MatAutocompleteModule, MatInputModule, MatIconModule, MatFormFieldModule];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];

@NgModule({
  declarations: [components],
  imports: [material, modules],
  exports: [components],
})
export class SharedModule {}
