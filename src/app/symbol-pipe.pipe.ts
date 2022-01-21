import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbolPipe'
})
export class SymbolPipePipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }

}
