import { Routes} from '@angular/router';
import { ViewMedComponent } from '../Pages/view-med/view-med.component';
import { CreateComponent } from '../Pages/create/create.component';
import { ViewComponent } from '../Pages/view/view.component';
import { PageNotFoundComponent } from '../Pages/page-not-found/page-not-found.component';
import { UpdateComponent } from '../Pages/update/update.component';
export const RouteInfo:Routes = [

    {path:'',component:ViewComponent}
    ,{path:'create',component:CreateComponent}
    ,{path:'viewMed/:id',component:ViewMedComponent}
    ,{path:'update/:id',component:UpdateComponent}
     ,{path:'**',component:PageNotFoundComponent}

]
