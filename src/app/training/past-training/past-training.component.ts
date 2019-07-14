import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  constructor( private trainingService: TrainingService ) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getFinishedExercises();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
