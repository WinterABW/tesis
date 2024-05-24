import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules.component';
import { RulesRoutingModule } from './rules-routing.module';
import { PredictModule } from '../predict/predict.module';



@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    PredictModule
  ]
})
export class RulesModule { }
