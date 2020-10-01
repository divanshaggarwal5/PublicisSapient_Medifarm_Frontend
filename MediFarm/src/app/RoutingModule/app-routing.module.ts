import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RouteInfo} from './Routes'

@NgModule({
  imports: [RouterModule.forRoot(RouteInfo)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
