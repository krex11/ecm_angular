import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassviewComponent } from './classview/classview.component';

const routes: Routes = [
  {
    path:'',
    component:ClassviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassviewRoutingModule { }
