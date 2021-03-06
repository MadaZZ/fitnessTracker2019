import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.onStartorResumeTimer();
  }

  onStartorResumeTimer() {
    const step = (this.trainingService.getRunningExercise().duration / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.stopExercise(this.progress);
        clearInterval(this.timer);
      }
    }, step);
  }

  onStopTraining() {
    clearInterval(this.timer);
    const dialogref = this.dialog.open(StopTrainingComponent, {
      data : {
        progress: this.progress
      }});
    dialogref.afterClosed().subscribe(result => {
        if (result === true) {
          this.trainingService.stopExercise(this.progress);
        } else {
          this.onStartorResumeTimer();
        }
      });
  }
}
