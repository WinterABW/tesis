import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnexosRoutingModule } from './anexos-routing.module';
import { AnexosComponent } from './handler/anexos.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HigieneComponent } from './higiene/higiene.component';



@NgModule({
  declarations: [
    AnexosComponent,
    TestComponent,
    HigieneComponent
  ],
  imports: [
    CommonModule,
    AnexosRoutingModule,
    FormsModule
  ]
})
export class AnexosModule { }
