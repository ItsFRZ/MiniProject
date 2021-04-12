import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardCodedAuthenticationService} from '../../Services/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router ,private hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  username : string;
  password : string;
  invalidLogin : boolean = false;

  errorMessage :String = "Invalid Login Credentials";

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.hardCodedAuthenticationService.authenticate(this.username,this.password))
      {
        this.invalidLogin = false;
        this.gotoHome();

      }
    else
      {
        this.invalidLogin = true;
      
      }
  }


  gotoHome(){
    this.router.navigate(['./store']);
  }

}
