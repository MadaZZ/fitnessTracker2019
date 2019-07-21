import { Injectable } from '@angular/core';
import { Exercise } from '../training/exercise.model';
import { TrainingService } from '../training/training.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private trainingService: TrainingService ) { }
  addExercise( exerciseToAdd: Exercise ) {
    this.trainingService.addExercise(exerciseToAdd);
  }
}
