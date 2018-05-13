import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert2spces'
})
export class Convert2spcesPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }

}
