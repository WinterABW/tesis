import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictComponent } from './predict/predict.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent              
  },
  {
    path: 'result', component: PredictComponent              
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
