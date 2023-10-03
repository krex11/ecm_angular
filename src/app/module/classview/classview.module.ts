import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassviewRoutingModule } from './classview-routing.module';
import { ClassviewComponent } from './classview/classview.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ClassviewComponent
  ],
  imports: [
    CommonModule,
    ClassviewRoutingModule,
    MatCardModule

  ]
})
export class ClassviewModule { }
