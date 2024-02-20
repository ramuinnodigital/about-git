import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { SecondLazyComponent } from './second-lazy/second-lazy.component';


@NgModule({
  declarations: [
    LazyLoadingComponent,
    SecondLazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
