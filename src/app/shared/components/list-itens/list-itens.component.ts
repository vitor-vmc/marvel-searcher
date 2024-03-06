import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../../core/interfaces/responses/commom-response.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { merge, startWith, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrl: './list-itens.component.scss',
})
export class ListItensComponent implements OnInit {
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5];

  dataSource: Item[] = [];

  pageEvent: PageEvent = new PageEvent();
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @Input() listItens: Item[] = [];
  @Input() title: string = '';

  ngOnInit(): void {
    this.loadItens();
  }

  loadItens() {
    this.length = this.listItens.length;
    this.linkListToPaginator();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  linkListToPaginator() {
    // merge simply joins all this operators and creates an       //observable that listen to paginator page events
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          // creates an obserbable of sample data
          return of(this.listItens); // Replace 'data' with 'this.listItens' or define 'data' variable
        })
      )
      .subscribe((res) => {
        const from = this.paginator.pageIndex * 5;
        const to = from + 5;
        this.dataSource = res.slice(from, to);
      });
  }
}
