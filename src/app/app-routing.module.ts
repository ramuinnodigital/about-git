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
import { CurdComponent } from './components/curd/curd.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { NgxChartsComponent } from './components/ngx-charts/ngx-charts.component';
import { SelectImageComponent } from './components/select-image/select-image.component';
import { SwitchMethodComponent } from './components/switch-method/switch-method.component';
import { BoxArrayComponent } from './components/box-array/box-array.component';
import { ShowHideComponent } from './components/show-hide/show-hide.component';
import { PraticeComponent } from './components/pratice/pratice.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { PraticeOnArrayComponent } from './components/pratice-on-array/pratice-on-array.component';
import { PracticeOnFilterComponent } from './components/all-array-methods/practice-on-filter/practice-on-filter.component';
import { NewCropperComponent } from './components/new-cropper/new-cropper.component';
import { TextCropperComponent } from './components/text-cropper/text-cropper.component';
import { StepMainComponent } from './components/query-params/step-main/step-main.component';
import { ConfirmGuard } from './services/confrim.guard';
import { FormAndPartnerComponent } from './components/form-and-partner/form-and-partner.component';
import { HostlisterAndHostbindingComponent } from './components/hostlister-and-hostbinding/hostlister-and-hostbinding.component';
import { UpdateValueWithIndexComponent } from './components/update-value-with-index/update-value-with-index.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { SelectDisabledComponent } from './components/select-disabled/select-disabled.component';
import { CountryCodeComponent } from './components/country-code/country-code.component';
import { CalBackFunctionsComponent } from './components/cal-back-functions/cal-back-functions.component';
import { FormThemesColorComponent } from './components/form-themes-color/form-themes-color.component';
import { NotificationsComponent } from './components/notifications/notifications.component';


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
  {path:'active',component:ActiveColorsComponent},
  {path:'curd',component:CurdComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'order',component:OrderTrackingComponent},
  {path:'chart',component:NgxChartsComponent},
  {path:'select-image',component:SelectImageComponent},
  {path:'switch',component:SwitchMethodComponent},
  {path:'box',component:BoxArrayComponent},
  {path:'showhide',component:ShowHideComponent},
  {path:'practice-form-array',component:PraticeComponent},
  {path:'bank',component:BankDetailsComponent},
  {path:'pratice-on-map',component:PraticeOnArrayComponent},
  {path:'filter',component:PracticeOnFilterComponent},
  {path:'new-cropper',component:NewCropperComponent},
  {path:'text',component:TextCropperComponent},
  {path:'step-main',component:StepMainComponent},
  {path:'formsandpartner',component:FormAndPartnerComponent},
  {path:'hostlister',component:HostlisterAndHostbindingComponent},
  {path:'updatewithindexvalue',component:UpdateValueWithIndexComponent},
  {path:'date-filter',component:DateFilterComponent},
  {path:'select-disbaled',component:SelectDisabledComponent},
  {path:'country-code',component:CountryCodeComponent},
  {path:'call-back',component:CalBackFunctionsComponent},
  {path:'themes',component:FormThemesColorComponent},
  {path:'',component:NotificationsComponent},
  {path:'lazy',loadChildren:()=> import('../app/components/lazy/lazy.module').then(m=> m.LazyModule)},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
