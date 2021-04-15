import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedDataService } from 'src/app/Services/med-data.service';
import {MedData} from '../../Classes/med-data';


@Component({
  selector: 'app-med-details',
  templateUrl: './med-details.component.html',
  styleUrls: ['./med-details.component.css']
})
export class MedDetailsComponent implements OnInit {

  constructor(private router : Router,private route : ActivatedRoute,private medDataService : MedDataService) { }

  btnStyle : string;

  

  ngOnInit(): void {
    this.btnStyle = "masterHideDefault";
    // console.log(this.btnStyle);
    this.fetchMedObject();
  }

  
  

  
 


  mapOff()
  {
    this.btnStyle = "masterHideDefault";
  }



  id : number;
  medData : MedData; 
  

  fetchMedObject(){

    this.id = this.route.snapshot.params['id'];

    this.medData = new MedData();
    this.medDataService.getMedDataByid(this.id).subscribe(

      data => { this.medData = data }

    );

  }


  viewAddress : string;
 
  mapOn(){
    
     this.viewAddress = this.medData.address+''+this.medData.city;


    this.btnStyle = "masterHideChange";
    // console.log(this.btnStyle);
    // console.log(this.viewAddress)
     
    this.router.navigate(['map',this.viewAddress]);
  
  }

  // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBhRrwlBpffnOsGqkyHbqEoJ7DVb_JT3bI&q={{medData.address}}+{{medData.city}}"
         
}
