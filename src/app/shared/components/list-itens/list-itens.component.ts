import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../../core/interfaces/responses/commom-response.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrl: './list-itens.component.scss'
})
export class ListItensComponent implements OnInit{

  length = 0;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  pageEvent: PageEvent = new PageEvent;



  @Input() listItens: Item[] = [];
  @Input() title: string = '';

  ngOnInit(): void {
    this.loadItens();
  }

  loadItens() {
    this.length = this.listItens.length;
  }


  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
