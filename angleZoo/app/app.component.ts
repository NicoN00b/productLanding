import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Animal Prison</h1>
      <h3>{{month}}/{{day}}/{{year}}</h3>

      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})
//Add eventBinding that shows picture and detail when mouseover occurs
export class AppComponent {
  // currentAnimal: string = 'Elephant in a Box';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  masterAnimalList: Animal[] = [
    new Animal("Elephant", "Mel", 35, "Herbivore", "Savannah Simulacra", "Male", "dreaming about Africa", "flashes and gawking yokels"),
    new Animal("Ocelet", "Isis", 12, "Carnivore", "Plastic Jungle", "Female", "stalking, torturing, feasting", "pretty much everyone and everything"),
    new Animal("Osprey", "Gunner", 5, "Carnivore", "Net Tent", "Male", "Diving for Salmon", "The Net that surrounds him"),
  ];
  selectedAnimal = null;

  finishedEditing() {
   this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
