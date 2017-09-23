import { Component, Output, EventEmitter }  from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
    <h3>New Animal</h3>
    <label>Enter Animal Species:</label>
    <input #newSpecies>
    <label>Enter Animal Name:</label>
    <input #newName>
    <label>Enter Animal Age:</label>
    <input #newAge>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
    <label>Enter Animal Location:</label>
    <input #newLocation>
    <label>Enter Animal Sex:</label>
    <input #newSex>
    <label>Enter Animal Likes:</label>
    <input #newLikes>
    <label>Enter Animal Dislikes:</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
