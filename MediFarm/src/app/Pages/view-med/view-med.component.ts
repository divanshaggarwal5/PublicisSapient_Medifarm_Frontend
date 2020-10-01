import { Component, OnInit } from '@angular/core';
import { MedOpsService } from 'src/app/Services/med-ops.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Medicine} from '../../shared/Medicine'
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-view-med',
  templateUrl: './view-med.component.html',
  styleUrls: ['./view-med.component.css']
})
export class ViewMedComponent implements OnInit {

  Medicine:Medicine;
  Error:boolean;
  constructor(private _medOps:MedOpsService
    ,private activatedRoutes:ActivatedRoute
    ,private loc:Location
    ,private router:Router
    ) { }

  ngOnInit(): void {

    this.activatedRoutes.params.subscribe(
      (data)=>this._medOps.getMed(data["id"])
      .subscribe((data)=>this.Medicine = data)
        ,(error)=>this.Error = true
      );   

  }

  

  
  // can be moved to a directive comoom for all pages
  goBack()
  {
    this.loc.back();
  }
  updateNotes()
  {
    this.router.navigate(['update',this.Medicine.Id]);
  }

}
