import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MedDataService } from 'src/app/Services/med-data.service';
import { MedData } from 'src/app/Classes/med-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  
  MedicineData : MedData[];

  counter : number = 23;

  constructor(private router : Router,private httpClient : HttpClient,private medDataService : MedDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(){
    this.medDataService.getMedData().subscribe(
      data => {this.MedicineData = data;
      }
    );
  }


  deleteMedData(id:number){

    this.medDataService.deleteMedData(id).subscribe(
      data => { console.log(data);  });

      this.selfLoad();

  }






  
  selfLoad(){
    this.router.navigate(['store']);
  }


}
