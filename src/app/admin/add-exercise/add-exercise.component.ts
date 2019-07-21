import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../../training/exercise.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
  }

  addExercise(form: NgForm) {
    const exerciseToAdd = {
      id: Math.round(Math.random() * 100000).toString(),
      name: form.value.name,
      duration: form.value.duration,
      calories: form.value.calories,
    };
    this.adminService.addExercise(exerciseToAdd);
  }
}
