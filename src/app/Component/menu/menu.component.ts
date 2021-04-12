import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardCodedAuthenticationService} from '../../Services/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn : boolean = false;

  constructor(private router : Router,public hardCodedAuthenticationService : HardCodedAuthenticationService) { }

  ngOnInit(): void {
   this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
  }


  search : String;

  onSearch(){
    // console.log(this.search);
    this.router.navigate(['search/',this.search]);
   
  }




}
