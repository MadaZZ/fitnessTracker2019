import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  trainings = [
    { name: 'Pushups', calories: 50, time: 30 },
    { name: 'chinups', calories: 90, time: 30 },
    { name: 'situps', calories: 70, time: 30 }
  ];
  @Output() startTraining = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onStartTraining() {
    this.startTraining.emit();
  }
}
