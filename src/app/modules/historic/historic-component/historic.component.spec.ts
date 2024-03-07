import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricComponent } from './historic.component';
import { StoreService } from '../../../core/services/store/store.service';
import { SearcherService } from '../../../core/services/searcher/searcher.service';
import { Observable, of } from 'rxjs';

describe('HistoricComponent', () => {
  let component: HistoricComponent;
  let fixture: ComponentFixture<HistoricComponent>;
  let storeService: StoreService;
  let searcherService: SearcherService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricComponent],
      providers: [StoreService, SearcherService],
    });

    fixture = TestBed.createComponent(HistoricComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
    searcherService = TestBed.inject(SearcherService);

    // Mock the observables
    spyOnProperty(searcherService, 'loading$', 'get').and.returnValue(of(false));
    spyOnProperty(storeService, 'charactersListStore$', 'get').and.returnValue(of([]));
    spyOnProperty(storeService, 'historicItemSubject$', 'get').and.returnValue(of(null));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have loading$ as an Observable', () => {
    expect(component.loading$).toBeDefined();
    expect(component.loading$ instanceof Observable).toBeTruthy();
  });

  it('should render the loading spinner when loading$', () => {
    spyOnProperty(searcherService, 'loading$', 'get').and.returnValue(of(true));
    fixture.detectChanges();
    const loadingSpinner = fixture.debugElement.nativeElement.querySelector('.loading-spinner');
    expect(loadingSpinner).toBeTruthy();
  });

  it('should have empty historicList$ by default', () => {
    fixture.detectChanges();
    expect(component.historicList$).toBeDefined();
    expect(component.historicList$).toEqual(of([]));
  });

  it('should have null character$ by default', () => {
    fixture.detectChanges();
    expect(component.character$).toBeDefined();
    expect(component.character$).toEqual(of(null));
  });

  // Add more test cases as needed for your specific component logic.
});