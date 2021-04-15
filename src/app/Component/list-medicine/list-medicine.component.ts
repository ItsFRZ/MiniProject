import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {MedData} from '../../Classes/med-data';
import {MedImage} from '../../Classes/med-image';
import {MedDataService} from '../../Services/med-data.service';
import {MedImageService} from '../../Services/med-image.service';
import {FilterCityPipe} from '../../Pipes/filter-city.pipe';


@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css']
})
export class ListMedicineComponent implements OnInit {

  
  MedicineData : MedData[];
  MedicineImageData : MedImage[];
  


  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  constructor(private httpClient : HttpClient,private router : Router,private medDataService : MedDataService,private medImageService : MedImageService) { }

  ngOnInit(): void {
    this.getData();
    this.getImageData();
  
  }

  private getData(){
    this.medDataService.getMedData().subscribe(
      data => {this.MedicineData = data;
      }
    );
  }

  
   getImageData() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8082/api/umed')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
       
        }
      );
  
      // console.log(this.retrievedImage);
    }


  



  add(){
    this.router.navigate(['add']);
  }




  //  //Gets called when the user clicks on retieve image button to get the image from back end
  //  getImage() {
  //   //Make a call to Sprinf Boot to get the Image Bytes.
  //   this.httpClient.get('http://localhost:8082/api/umed')
  //     .subscribe(
  //       res => {
  //         // this.retrieveResonse = res;
  //         // this.base64Data = this.retrieveResonse.picByte;
  //         // this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
       
  //       }
  //     );
  // }


 
  filteredCityData : string = '';
  filteredData($event){
    this.filteredCityData = $event;
  }



  // Medicine Details
  medicineDetails(id : number){

    this.router.navigate(['details',id])
  }
}
