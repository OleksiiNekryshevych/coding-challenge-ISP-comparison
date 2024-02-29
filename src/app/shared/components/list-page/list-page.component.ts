import { Directive, OnInit } from '@angular/core';

import { DestroyableDirective } from '../../directives/destroyable.directive';

@Directive()
export abstract class ListPageComponent<T>
  extends DestroyableDirective
  implements OnInit
{
  public currentPage: number = 1;
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
