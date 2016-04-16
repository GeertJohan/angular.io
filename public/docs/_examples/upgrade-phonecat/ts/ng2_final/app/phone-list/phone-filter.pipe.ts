// #docregion

import {Pipe, PipeTransform} from 'angular2/core';
import {PhoneData} from '../core/phone/phone.service';

@Pipe({name: 'phoneFilter'})
export default class PhoneFilterPipe implements PipeTransform {

  transform(input:PhoneData[], args:string[]): PhoneData[] {
    let query = args[0];
    if (query) {
      query = query.toLowerCase();
      return input.filter((phone) => {
        const name = phone.name.toLowerCase();
        const snippet = phone.snippet.toLowerCase();
        return name.indexOf(query) >= 0 || snippet.indexOf(query) >= 0;
      });
    } else {
      return input;
    }
  }

}
