import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalModule} from './dashboard/portal.module'
const routes: Routes = [
  {
    path: '',component: LoginComponent
  }
  ,
  {
    path: 'home', loadChildren:() => PortalModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
