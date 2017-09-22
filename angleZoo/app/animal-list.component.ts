import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="localColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}, {{currentAnimal.name}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.sex}}, {{currentAnimal.likes}}, {{currentAnimal.dislikes}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
  </ul>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  localColor(currentAnimal){
   if (currentAnimal.location === "Savannah Simulacra"){
     return "bg-warning";
   } else if (currentAnimal.location === "Plastic Jungle") {
     return  "bg-success";
   } else {
     return "bg-info";
   }
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
