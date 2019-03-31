import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();

    return value.filter((term) => {
      return term.name.english.toLowerCase().includes(searchText);
    });
  }

}
