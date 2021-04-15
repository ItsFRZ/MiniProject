import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  btnStyle : string;
  
  fetchedAddress : string;
  

  


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
