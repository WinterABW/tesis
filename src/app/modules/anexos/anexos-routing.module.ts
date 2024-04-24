import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnexosComponent } from './handler/anexos.component';
import { TestComponent } from './test/test.component';
import { HigieneComponent } from './higiene/higiene.component';

const routes: Routes = [
  {
    path: '', component: AnexosComponent
  },
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'bucal', component: HigieneComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnexosRoutingModule { }