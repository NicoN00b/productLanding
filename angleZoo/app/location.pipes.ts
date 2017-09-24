import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "locale",
  pure: false
})

export class LocationPipe implements PipeTransform {
  transform(input: Animal[], args) {
    return input;
  }
}
