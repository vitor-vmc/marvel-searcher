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
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [HeaderComponent, SearcherComponent, LoaderComponent, GenericErrorComponent, WelcomeCardComponent, SearchDetailsComponent, FooterComponent];

const material = [MatAutocompleteModule, MatInputModule, MatIconModule, MatFormFieldModule, MatProgressSpinnerModule];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];

@NgModule({
  declarations: [components, LoaderComponent, HeaderComponent, GenericErrorComponent, WelcomeCardComponent, SearchDetailsComponent, FooterComponent],
  imports: [material, modules],
  exports: [components, modules],
})
export class SharedModule {}
