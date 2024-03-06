import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './components/header/header.component';
import { GenericErrorComponent } from './components/generic-error/generic-error.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ListItensComponent } from './components/list-itens/list-itens.component';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';


const components = [
  HeaderComponent,
  SearcherComponent,
  LoaderComponent,
  GenericErrorComponent,
  WelcomeCardComponent,
  SearchDetailsComponent,
  FooterComponent,
  ListItensComponent,
];

const material = [
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatTableModule,
  MatListModule,
  MatTabsModule
];

const modules = [FormsModule, ReactiveFormsModule, CommonModule];

@NgModule({
  declarations: [
    components,
    LoaderComponent,
    HeaderComponent,
    GenericErrorComponent,
    WelcomeCardComponent,
    SearchDetailsComponent,
    FooterComponent,
    ListItensComponent,
  ],
  imports: [material, modules],
  exports: [components, modules],
})
export class SharedModule {}
