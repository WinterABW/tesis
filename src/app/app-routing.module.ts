import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent
  },
  {
    path: 'result', loadChildren: () =>
      import('./modules/predict/predict.module')
        .then(m => m.PredictModule)
  },
  {
    path: 'anexos', loadChildren: () =>
      import('./modules/anexos/anexos.module')
        .then(m => m.AnexosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
