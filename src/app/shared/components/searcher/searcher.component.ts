import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, startWith, map } from "rxjs";


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent {
  searchTerm: string = '';
  results: string[] = ['Angular', 'React', 'Vue', 'JavaScript', 'TypeScript'];

  filteredResults$: Observable<string[]> = new Observable<string[]>();

  constructor() {
    this.initSearcher();
  }

  private initSearcher(): void {
    this.filteredResults$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterResults(value))
    );
  }

  get searchControl(): FormControl {
    return new FormControl(this.searchTerm);
  }

  filterResults(value: string): string[] {
    return this.results.filter(result => result.toLowerCase().includes(value.toLowerCase()));
  }

  displayFn(result: string): string {
    return result || '';
  }

  onSearchInput(): void {
    // Implement additional actions as needed
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  onOptionSelected(event: any): void {
    // Implement additional actions as needed
  }
}
