import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private route : ActivatedRoute,private domSanitizer : DomSanitizer) { }

  btnStyle : string;
  
  fetchedAddress : string;
  
  baseURL = "https://www.google.com/maps/embed/v1/place?q=[address]&key=AIzaSyBhRrwlBpffnOsGqkyHbqEoJ7DVb_JT3bI";


  // https://www.google.com/maps/embed/v1/place?q=fetchedAddress&key=AIzaSyBhRrwlBpffnOsGqkyHbqEoJ7DVb_JT3bI

  methodToGetURL(){

  return this.domSanitizer.bypassSecurityTrustResourceUrl(this.baseURL);
  }

  ngOnInit(): void {
    
    this.fetchedAddress = this.route.snapshot.params['data'];
    console.log(this.fetchedAddress);
  
    // this.baseURL +=this.fetchedAddress; 
   
  }





  mapOff(){
    this.btnStyle = "masterHideDefault";
    console.log(this.btnStyle);
  }
  

}
