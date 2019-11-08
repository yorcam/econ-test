import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let resultHeros = [];
    for(let heros of value){
      if(heros.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultHeros.push(heros);
      }
    }
    return resultHeros;
  }

}
