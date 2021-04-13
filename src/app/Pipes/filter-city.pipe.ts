import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(value: any, searchTerm : any): any {

    return value.filter(function(search){
      return search.city.indexOf(searchTerm) > -1
    })




    // if(sCity === ""){
    //   return value;
    // }

    // const medArray : any [] = [];
    // for(let i = 0; i<=value;i++){
    //   let cityName : string = value[i].city;
    //   if(cityName.startsWith(sCity)){
    //     medArray.push(value[i]);
    //   }


    // }
    // return medArray;
  }

}
