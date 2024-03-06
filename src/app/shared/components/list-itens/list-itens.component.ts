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
  pageSize = 8;
  pageIndex = 0;
  pageSizeOptions = [8];

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

  linkListToPaginator() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return of(this.listItens);
        })
      )
      .subscribe((res) => {
        const from = this.paginator.pageIndex * this.pageSize;
        const to = from + this.pageSize;
        this.dataSource = res.slice(from, to);
      });
  }
}
