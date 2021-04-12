import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardCodedAuthenticationService} from '../../Services/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router,private hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigate(['./home']);
  }

  onLogout(){

    this.hardCodedAuthenticationService.logout();
    this.goToHome();
  }

}
