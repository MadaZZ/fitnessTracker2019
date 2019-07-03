import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

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
  private runningExercise: Exercise;
  exerciseChanged = new Subject<boolean>();
  constructor() { }

  getAvailableExercises() {
    return this.availableExercise.slice(); // Returns a different array instance than the original
  }

  startExercise (selectedId: string) {
    this.runningExercise = this.availableExercise.find( ex => ex.id === selectedId );
    if (this.runningExercise) {
      this.exerciseChanged.next(true);
    }
  }

}
