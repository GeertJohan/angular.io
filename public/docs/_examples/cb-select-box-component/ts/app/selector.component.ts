// #docplaster
// #docregion
// #docregion skeleton
import {Component, EventEmitter, Input, Output} from 'angular2/core'

// #docregion next-id
let nextSelectId=1;
// #enddocregion next-id

@Component({
  selector: 'my-selector',
  exportAs: 'mySelector',
  template:`
  <select id={{selectId}} (change)="onChange($event.target.value)">
    <option *ngFor="#option of options, #i=index"
      [value]="i"
      [selected]="isSelected(option)">
      {{option[display]}}
    </option>
  </select>
  `
})
// #docregion selector-class
export class SelectorComponent {
// #enddocregion skeleton
  @Input('id') selectId = "select-" + nextSelectId++; 
  @Input() display = 'name';
  @Input() key: any;
  @Input() options: any[];
  @Input() optionKey = 'id';
  
  @Output() change = new EventEmitter();
  @Output() keyChange = new EventEmitter();
  
  isSelected(option: any) {
    return this.key && this.options && option[this.optionKey] === this.key;
  }

  onChange(index: string) {
    this.change.emit(this.options[+index]);
    this.keyChange.emit(this.options[+index][this.optionKey]);
  }
// #docregion skeleton
}
// #enddocregion skeleton
// #enddocregion selector-class
// #enddocregion