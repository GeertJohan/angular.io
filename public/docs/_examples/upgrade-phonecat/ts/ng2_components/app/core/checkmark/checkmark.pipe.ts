// #docregion
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'checkmark'})
export class CheckmarkPipe implements PipeTransform {
  transform(input:string): string {
    return input ? '\u2713' : '\u2718';
  }
}
