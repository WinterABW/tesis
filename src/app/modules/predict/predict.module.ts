import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PredictComponent } from './predict/predict.component';
import { PredictRoutingModule } from './predict-routing.module';

@NgModule({
  declarations: [
    PredictComponent
  ],
  imports: [
    CommonModule,
    PredictRoutingModule,
    ReactiveFormsModule
  ]
})
export class PredictModule { }
