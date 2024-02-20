import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { KycOnlineComponent } from './components/kyc-online/kyc-online.component';
import { RegisterFormComponent } from './core/register-form/register-form.component';
import { LoginComponent } from './core/login/login.component';
import { StepParentComponent } from './components/steps/step-parent/step-parent.component';
import { SuccessfullPageComponent } from './components/steps/successfull-page/successfull-page.component';
import { AuthGuard } from './authguard.guard';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { SlideNavComponent } from './components/slide-nav/slide-nav.component';
import { AngularTimerComponent } from './components/angular-timer/angular-timer.component';
import { AddAndRemoveArrayComponent } from './components/add-and-remove-array/add-and-remove-array.component';
import { NgxEditorComponent } from './components/ngx-editor/ngx-editor.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ParentComponent } from './components/component-communication/parent/parent.component';
import { UploadAllDocumentsComponent } from './components/upload-documents/upload-all-documents/upload-all-documents.component';
import { VideoRecorderComponent } from './components/video-recorder/video-recorder.component';
import { ParentBarComponent } from './components/through-subject/parent-bar/parent-bar.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { InstallRazorpayComponent } from './components/install-razorpay/install-razorpay.component';
import { ActiveColorsComponent } from './components/active-colors/active-colors.component';


const routes: Routes = [
  // {path:'register',component:RegisterFormComponent},
  // {path:'login',component:LoginComponent},
  // {path:'',component:StepParentComponent},
  // {path:'company',component:CompanyDetailsComponent},
  // {path:'contact',component:ContactDetailsComponent},
  // {path:'kyc',component:KycOnlineComponent},
  // {path:'successfully',component:SuccessfullPageComponent,canActivate:[AuthGuard]},
  // {path:'formarray',component:FormArrayComponent},
  // {path:'slide',component:SlideNavComponent},

  {path:'timer',component:AngularTimerComponent},
  {path:'add-remove-array',component:AddAndRemoveArrayComponent},
  {path:'ngx-editor',component:NgxEditorComponent},
  {path:'quill-editor',component:QuillEditorComponent},
  {path:'filter',component:FilterItemsComponent},
  {path:'reactive',component:ReactiveFormsComponent},
  {path:'parent',component:ParentComponent},
  {path:'subject',component:ParentBarComponent},
  {path:'upload',component:UploadAllDocumentsComponent},
  {path:'video',component:VideoRecorderComponent},
  {path:'payment/:id',component:PaymentGatewayComponent},
  {path:'install',component:InstallRazorpayComponent},
  {path:'',component:ActiveColorsComponent},
  {path:'lazy',loadChildren:()=> import('../app/components/lazy/lazy.module').then(m=> m.LazyModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
