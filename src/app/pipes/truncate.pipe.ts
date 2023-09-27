import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string = '', length: number = 100): string  {
    let availableCharacters = value.slice(0, length);

    if (value.length > length) {
      availableCharacters += '...';
    }

    return availableCharacters;
  }

}
