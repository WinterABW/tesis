import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PredictComponent } from './predict/predict.component';
import { PredictRoutingModule } from './predict-routing.module';
import { FormComponent } from './form/form.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultComponent } from './result/result.component';

const components = [
  PredictComponent,
  FormComponent,
  InfoTableComponent,
  ResultTableComponent,
  ResultComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    PredictRoutingModule,
    ReactiveFormsModule
  ]
})
export class PredictModule { }
