import { Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import {Medicine} from '../../shared/Medicine'
import { MedOpsService } from 'src/app/Services/med-ops.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('newMedForm') newFormDirective;
  med:Medicine;
  IsSuccess:boolean;
  IsFail:boolean;
  constructor(private _medOps:MedOpsService
    ,private location:Location
    ) {

      this.med = new Medicine();
     }

  ngOnInit(): void {

  }
  onSubmit()
  {
    this._medOps.addMed(this.med).subscribe((data)=>{this.IsSuccess = true,this.newFormDirective.reset()},(error)=>this.IsFail = true)
  }

  goBack()
  {
    this.location.back();
  }

}
