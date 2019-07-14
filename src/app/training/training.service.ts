import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private availableExercise: Exercise[] = [
    { id: 'ex001' , name: 'Pushups', calories: 50, duration: 60 },
    { id: 'ex002' , name: 'Chinups', calories: 90, duration: 30 },
    { id: 'ex003' , name: 'Situps', calories: 70, duration: 40 },
    { id: 'ex004' , name: 'Burpees', calories: 70, duration: 20 }
  ];
  private runningExercise: Exercise;
  private doneExercises: Exercise[] = [];
  exerciseChanged = new Subject<boolean>();
  constructor() { }

  getAvailableExercises() {
    return this.availableExercise.slice(); // Returns a different array instance than the original
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercise.find( ex => ex.id === selectedId );
    if (this.runningExercise) {
      this.exerciseChanged.next(true);
    }
  }

  stopExercise(progress: number) {
    if (progress < 100) {
      this.cancelExercise(progress);
    } else {
      this.completeExercise();
    }
  }

  cancelExercise(progress: number) {
    this.doneExercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * progress * 0.01,
      calories: this.runningExercise.calories * progress * 0.01,
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(false);

    console.log(this.doneExercises);
  }

  completeExercise() {
    this.doneExercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(false);
    console.log(this.doneExercises);
  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

  getFinishedExercises() {
    return this.doneExercises.slice();
  }
}
