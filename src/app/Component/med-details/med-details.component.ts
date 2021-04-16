import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedImage } from 'src/app/Classes/med-image';
import { MedDataService } from 'src/app/Services/med-data.service';
import { MedImageService } from 'src/app/Services/med-image.service';
import {MedData} from '../../Classes/med-data';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-med-details',
  templateUrl: './med-details.component.html',
  styleUrls: ['./med-details.component.css']
})
export class MedDetailsComponent implements OnInit {

  constructor(public domSanitizer : DomSanitizer ,private router : Router,private route : ActivatedRoute,private medDataService : MedDataService,private medImageService : MedImageService) { 


 

  }

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
  medImage : MedImage;

  imageURL :String = '';

  fetchMedObject(){

    this.id = this.route.snapshot.params['id'];


    this.medImage = new MedImage();
    this.medImageService.getMedImageDataByid(this.id).subscribe(
      data => {this.medImage = data,
        console.log(this.medImage.picByte);}
      
    );

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
     
    // this.router.navigate(['map']);
  
  }


  imageNameFunc(){
    return this.imageURL = this.medImage.picByte;
  }

  // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBhRrwlBpffnOsGqkyHbqEoJ7DVb_JT3bI&q={{medData.address}}+{{medData.city}}"
      

  // {{'data:image/jpg;base64,' + medImage.picByte}}
 
 

}
