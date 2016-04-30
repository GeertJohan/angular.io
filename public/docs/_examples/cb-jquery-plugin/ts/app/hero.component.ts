// #docregion
import {Component, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

// #docregion declare-jquery
declare var jQuery:any;
// #enddocregion declare-jquery
@Component({
  selector: 'cb-hero',
  templateUrl: 'app/hero.component.html'            
})
export class HeroComponent implements AfterViewInit {
  @Input() name:string;    
  @ViewChild('hero') hero: ElementRef;
  
  // #docregion add-plugin
  ngAfterViewInit() {
    jQuery(this.hero.nativeElement).draggable({revert: "invalid"});      
  }
  // #enddocregion add-plugin
}
