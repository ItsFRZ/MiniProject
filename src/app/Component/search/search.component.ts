import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedData } from 'src/app/Classes/med-data';
import { HardCodedAuthenticationService } from 'src/app/Services/hard-coded-authentication.service';
import { MedDataService } from 'src/app/Services/med-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  isUserLoggedIn : boolean = false;
  MedicineData : MedData[];
  mname : string = '';
  
  search : string = '';

  isShown = false;

  constructor(public hardCodedAuthenticationService : HardCodedAuthenticationService,private router : Router,private route : ActivatedRoute,private medDataService : MedDataService) { }

  ngOnInit(): void {

    this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
    this.mname = this.route.snapshot.params['mname'];
  
    console.log(this.mname);
    this.getSearchData(this.mname);
  }


 

  private getSearchData(search){
    this.medDataService.getDataByMedName(search).subscribe(
      data => { this.MedicineData = data}
      
    );      

    // this.router.navigateByUrl('/store', { skipLocationChange: true });
    // this.router.navigate(["/search",this.mname]);
  }






  onSearch(){
    this.getSearchData(this.search);
  }


}
