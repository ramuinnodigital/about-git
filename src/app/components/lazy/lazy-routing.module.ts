import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { SecondLazyComponent } from './second-lazy/second-lazy.component';

const routes: Routes = [
  {path:'',component:LazyLoadingComponent},
  {path:'second-lazy',component:SecondLazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
