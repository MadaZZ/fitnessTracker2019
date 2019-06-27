import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.toggle.emit();
  }

}
