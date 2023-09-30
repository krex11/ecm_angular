import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'home',
        loadChildren: ()=>
        import('./module/home/home.module').then(
          (m) => m.HomeModule
        )
      },
      {
        path:'classview',
        loadChildren:() =>
        import('./module/classview/classview.module').then(
          (m)=> m.ClassviewModule
        )
      },
      {
        path:'history',
        loadChildren:() =>
        import('./module/history/history.module').then(
          (m) => m.HistoryModule
        )
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
