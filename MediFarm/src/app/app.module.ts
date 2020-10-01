import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './RoutingModule/app-routing.module';
import { ViewComponent } from './Pages/view/view.component';
import { CreateComponent } from './Pages/create/create.component';
import { ViewMedComponent } from './Pages/view-med/view-med.component';
import { MedOpsService } from './Services/med-ops.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { UpdateComponent } from './Pages/update/update.component'
import { FormsModule } from '@angular/forms';
import { AppcomponentComponent } from './pages/appcomponent/appcomponent.component';
@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent,
    ViewMedComponent,
    PageNotFoundComponent,
    UpdateComponent,
    AppcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MedOpsService],
  bootstrap: [AppcomponentComponent]
})
export class AppModule { }
