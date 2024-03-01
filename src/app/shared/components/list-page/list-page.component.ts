import { Directive, OnInit } from '@angular/core';

import { DestroyableDirective } from '../../directives/destroyable.directive';

import { PaginationParams } from '../../interfaces/pagination-params.interface';

@Directive()
export abstract class ListPageComponent<T, K>
  extends DestroyableDirective
  implements OnInit
{
  public currentPage: number = 1;
  public paginationParams!: PaginationParams<K>;
  public listItems: T[] = [];
  public isLoading: boolean = false;

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.load();
  }

  public nextPage(): void {
    if (this.isLoading) return;

    this.currentPage++;
    this.load();
  }

  public previousPage(): void {
    if (this.isLoading) return;

    this.currentPage--;
    this.load;
  }

  protected abstract load(): void;
}
