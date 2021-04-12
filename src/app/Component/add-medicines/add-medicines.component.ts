import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedData } from 'src/app/Classes/med-data';
import { MedDataService } from 'src/app/Services/med-data.service';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  medData : MedData = new MedData();

  constructor(private router : Router,private medDataService : MedDataService,private httpClient : HttpClient) { }




  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;



  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }



  saveMedData(){
    
    

    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8082/api/umed', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );











    //Api call for rest of form
    this.medDataService.createMedData(this.medData).subscribe(
     
      data => { console.log(data); },
      
      error => console.log(error)
      
    );
    this.goToMedDataList();
  }


  goToMedDataList(){
    this.router.navigate(['../store']);
  }

  ngOnInit(): void {
  }


  onSubmit(){

    this.saveMedData();
   


  }
  



}