import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private availableExercise: Exercise[] = [
    { id: 'ex001' , name: 'Pushups', calories: 50, duration: 30 },
    { id: 'ex002' , name: 'Chinups', calories: 90, duration: 30 },
    { id: 'ex003' , name: 'Situps', calories: 70, duration: 30 },
    { id: 'ex004' , name: 'Burpees', calories: 70, duration: 30 }
  ];

  getAvailableExercises() {
    return this.availableExercise.slice(); // Returns a different array instance than the original
  }


  constructor() { }
}
