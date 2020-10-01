import { Component, OnInit } from '@angular/core';
import { MedOpsService } from 'src/app/Services/med-ops.service';
import { Router } from '@angular/router';
import {Medicine} from '../../shared/Medicine'
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  MedData:Medicine[];

  FilteredMedData:Medicine[];
  // *** These both fields can be encapsulated in a common directive but due to time
  // deficiency making this way.
  IsLoading : boolean
  ErrorEncountered:boolean
  // *******
  constructor(private _medOps:MedOpsService
    ,private router:Router
    ,private loc:Location
    ) { }

  ngOnInit(): void 
  {
    //subscribe to the service to get data
    this._medOps.getAllMed()
    .subscribe(
      (data)=>{this.initMedData(data)}
      ,(error)=> this.ErrorEncountered = true
      );

  }

  initMedData = (data:Medicine[])=>{
    this.MedData = data;
  }
  searchMed($event)
  {
    debugger
    // get Keystrokes here
    this.FilteredMedData = this.MedData.filter((item=>item["name"].toUpperCase().indexOf($event.toUpperCase())>=0));
  }

  // can be moved to a directive comoom for all pages
  goBack()
  {
    this.loc.back();
  }

  

}
