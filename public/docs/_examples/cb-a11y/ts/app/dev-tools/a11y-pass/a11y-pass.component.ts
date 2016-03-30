import {Component} from "@angular/core";

@Component({
  selector: 'a11-fails',
  templateUrl: './app/dev-tools/a11y-pass/a11y-pass.component.html'
})
export class A11yPass {

  hideSuccessConfirmation: boolean =  true;

  submit(messageElement: any):void{
    this.hideSuccessConfirmation = false;
    setTimeout(() => {
      messageElement.focus();
    }, 200);
  }

}
