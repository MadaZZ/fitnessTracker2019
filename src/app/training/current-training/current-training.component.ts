import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer;
  @Output() exerciseStopped = new EventEmitter<void>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.onStartorResumeTimer();
  }

  onStartorResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStopTraining() {
    clearInterval(this.timer);
    const dialogref = this.dialog.open(StopTrainingComponent, {
      data : {
        progress: this.progress
      }});
    dialogref.afterClosed().subscribe(result => {
        console.log(result);
        if (result === true) {
          this.exerciseStopped.emit();
        } else {
          this.onStartorResumeTimer();
        }
      });
  }
}
