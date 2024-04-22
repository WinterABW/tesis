import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitFormComponent } from './init-form/init-form.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  {
    path: '', component: InitFormComponent
  },
  {
    path: 'predict', component: PredictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
