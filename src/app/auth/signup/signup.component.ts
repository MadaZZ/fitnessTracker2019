import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  
  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18); 
    this.minDate = new Date();
    this.minDate.setFullYear(this.maxDate.getFullYear()-90); 
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const user = {
      email : form.value.email,
      password: form.value.password
    };
    this.authService.registerUser(user);
  }

}
