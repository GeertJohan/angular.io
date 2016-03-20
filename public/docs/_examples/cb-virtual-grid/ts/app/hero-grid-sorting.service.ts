// #docregion
import {Row}             from './row';
import {Injectable}      from 'angular2/core';

@Injectable()
export class HeroGridSortingService{
  sortDirection:number = 1;
  
  sort(rows:Array<Row>, colIndex:number){
    this.sortDirection *= -1;
    rows.sort((a,b) => {
       if(a.columns[colIndex].cellValue === b.columns[colIndex].cellValue){
        return 0;
       }
       
       if(a.columns[colIndex].cellValue > b.columns[colIndex].cellValue){
        return -1 * this.sortDirection;
       }
       
       if(a.columns[colIndex].cellValue < b.columns[colIndex].cellValue){
        return 1 * this.sortDirection;
       }
    });
  }
}