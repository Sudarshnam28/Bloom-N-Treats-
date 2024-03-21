import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(Country: string): string {
    let value=Country.split(' ');
    if(value.length==1){
     return value[0].substring(0,3).toUpperCase();
    }
    else if(value.length==2){
     return value.map(word=>word.charAt(0).toUpperCase()).join('');
    }else{
     return value.slice(0,3).join(' ');
    }
   }

}
