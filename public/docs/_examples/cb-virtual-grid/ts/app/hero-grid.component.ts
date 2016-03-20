// #docregion
import {Component, AfterViewChecked, ElementRef} from 'angular2/core';

import {HeroGridSortingService} from './hero-grid-sorting.service';
import {HeroGridService}        from './hero-grid.service';
import {KeyCodeService}         from './key-code.service';
import {HeroDataService}        from './hero-data.service';
import {Row}                    from './row';

@Component({
  selector: 'hero-grid',
  providers:[HeroGridService,KeyCodeService,HeroDataService,HeroGridSortingService],
  template:`<h1>Hero Grid</h1>
            <table id="hero-grid">
              <tr>
                <td class="row-number-column"></td>
                <td (click)="sort(colIndex)" class="columnHeader" 
                    *ngFor="#columnHeader of heroGridService.header; #colIndex = index">
                  {{columnHeader}}
                </td>
              </tr>
              <tr *ngFor="#row of visibleRows">
                <td class="row-number-column">
                  {{heroGridService.rows.indexOf(row)}}
                </td>
                <td *ngFor="#col of row.columns">
                  <input [id]="heroGridService.createCellSelector(row,col)" 
                         [value]="col.cellValue" (input)="col.cellValue = $event.target.value" 
                         (click)="heroGridService.selectColumn(col)" (keydown)="navigate($event)" />
                </td>
              </tr>
            </table>`
})

export class HeroGrid implements AfterViewChecked{

  visibleRows:Array<Row> = [];
  heroGridService:HeroGridService;
  elementRef:ElementRef;

  constructor(heroGridService:HeroGridService,elementRef:ElementRef){
    this.elementRef = elementRef;
    this.heroGridService = heroGridService;
    this.visibleRows = this.heroGridService.getVisibleRows();
  }
  
  navigate($event:any){
    let res = this.heroGridService.navigate($event.keyCode);
    this.visibleRows = this.heroGridService.getVisibleRows();
    return res;
  }
  
  sort(columnIndex:number){
    this.heroGridService.sort(columnIndex);
    this.visibleRows = this.heroGridService.getVisibleRows();
  }
  
  ngAfterViewChecked(){
    let cell = this.elementRef.nativeElement.querySelector('#' + this.heroGridService.getCurrentCellSelector());
    cell.focus();
  }
}