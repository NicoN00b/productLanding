import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Animal Prison</h1>
      <h3>{{month}}/{{day}}/{{year}}</h3>
      <ul>
        <li [class]="localColor(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}}, {{currentAnimal.name}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.sex}}, {{currentAnimal.likes}}, {{currentAnimal.dislikes}} <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
      </ul>
      <div>
        <h3>{{selectedAnimal.species}}{{selectedAnimal.name}}</h3>
        <h3>Edit Info</h3>
        <label>Enter Animal Species:</label>
        <input [(ngModel)]="selectedAnimal.species">
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="selectedAnimal.name">
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="selectedAnimal.age">
        <label>Enter Animal Diet:</label>
        <input [(ngModel)]="selectedAnimal.diet">
        <label>Enter Animal Location:</label>
        <input [(ngModel)]="selectedAnimal.location">
        <label>Enter Animal Sex:</label>
        <input [(ngModel)]="selectedAnimal.sex">
        <label>Enter Animal Likes:</label>
        <input [(ngModel)]="selectedAnimal.likes">
        <label>Enter Animal Dislikes:</label>
        <input [(ngModel)]="selectedAnimal.dislikes">

      </div>
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
  animals: Animal[] = [
    new Animal("Elephant", "Mel", 35, "Herbivore", "Savannah Simulacra", "Male", "dreaming about Africa", "flashes and gawking yokels"),
    new Animal("Ocelet", "Isis", 12, "Carnivore", "Plastic Jungle", "Female", "stalking, torturing, feasting", "pretty much everyone and everything"),
    new Animal("Osprey", "Gunner", 5, "Carnivore", "Net Tent", "Male", "Diving for Salmon", "The Net that surrounds him"),
  ];
  selectedAnimal: Animal = this.animals[0];

  localColor(currentAnimal){
   if (currentAnimal.location === "Savannah Simulacra"){
     return "bg-warning";
   } else if (currentAnimal.location === "Plastic Jungle") {
     return  "bg-success";
   } else {
     return "bg-info";
   }
 }

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public sex: string, public likes: string, public dislikes: string) {

  }
}
