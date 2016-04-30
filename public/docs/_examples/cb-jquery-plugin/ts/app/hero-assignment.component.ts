// #docregion
import {Component, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'cb-assignment',
  templateUrl: 'app/hero-assignment.component.html'
})
export class HeroAssignmentComponent implements AfterViewInit {
  @Input() title:string;  
  @ViewChild('assignment') assignment: ElementRef;
  heroDropped:boolean = false;
  
  // #docregion add-plugin
  ngAfterViewInit() {
    jQuery(this.assignment.nativeElement).droppable({drop : (event:any, ui:any) => {
      this.heroDropped = true;
    }});   
  }
  // #enddocregion add-plugin
}