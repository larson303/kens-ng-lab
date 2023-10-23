import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flattenPipe'
})
export class FlattenPipePipe implements PipeTransform {

  transform(values: any[]): any[] {
    return this.flattenArray(values);
  }

  private flattenArray(arr: any[]): any[] {
    // return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(this.flattenArray(val)) : acc.concat(val), []);
  
    const result: any[] = [];

    arr.forEach((val) => {
      if(Array.isArray(val)) {
        result.push(...this.flattenArray(val));
      } else {
        result.push(val);
      }
    });


    return result;
  }



}
