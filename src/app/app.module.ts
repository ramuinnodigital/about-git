import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { KycOnlineComponent } from './components/kyc-online/kyc-online.component';
import { RegisterFormComponent } from './core/register-form/register-form.component';
import { LoginComponent } from './core/login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StepParentComponent } from './components/steps/step-parent/step-parent.component';
import { SignupInfoComponent } from './components/steps/signup-info/signup-info.component';
import { PersonalInfoComponent } from './components/steps/personal-info/personal-info.component';
import { ProfessinalInfoComponent } from './components/steps/professinal-info/professinal-info.component';
import { SuccessfullPageComponent } from './components/steps/successfull-page/successfull-page.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { SlideNavComponent } from './components/slide-nav/slide-nav.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularTimerComponent } from './components/angular-timer/angular-timer.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { AddAndRemoveArrayComponent } from './components/add-and-remove-array/add-and-remove-array.component';
import { NgxEditorComponent } from './components/ngx-editor/ngx-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ParentComponent } from './components/component-communication/parent/parent.component';
import { ChildComponent } from './components/component-communication/child/child.component';
import { UploadAllDocumentsComponent } from './components/upload-documents/upload-all-documents/upload-all-documents.component';
import { PanComponent } from './components/upload-documents/pan/pan.component';
import { SignatureComponent } from './components/upload-documents/signature/signature.component';
import { BankComponent } from './components/upload-documents/bank/bank.component';
import { ImageCroppedComponent } from './components/upload-documents/image-cropped/image-cropped.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ChildTwoComponent } from './components/component-communication/child-two/child-two.component';
import { StringMethodsComponent } from './components/string-methods/string-methods.component';
import { ArrayMethodsComponent } from './components/array-methods/array-methods.component';
import { VideoRecorderComponent } from './components/video-recorder/video-recorder.component';
import { SideNavComponent } from './components/through-subject/side-nav/side-nav.component';
import { MainBarComponent } from './components/through-subject/main-bar/main-bar.component';
import { ParentBarComponent } from './components/through-subject/parent-bar/parent-bar.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { InstallRazorpayComponent } from './components/install-razorpay/install-razorpay.component';
import { ActiveColorsComponent } from './components/active-colors/active-colors.component';
import { AddCartComponent } from './components/through-subject/add-cart/add-cart.component';
import { CurdComponent } from './components/curd/curd.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { NgxChartsComponent } from './components/ngx-charts/ngx-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SelectImageComponent } from './components/select-image/select-image.component';
import { SwitchMethodComponent } from './components/switch-method/switch-method.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BoxArrayComponent } from './components/box-array/box-array.component';
import { ShowHideComponent } from './components/show-hide/show-hide.component';
import { PraticeComponent } from './components/pratice/pratice.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { SearchPipe } from '../app/pipes/search.pipe';
import { PraticeOnArrayComponent } from './components/pratice-on-array/pratice-on-array.component';
import { PracticeOnFilterComponent } from './components/all-array-methods/practice-on-filter/practice-on-filter.component';
import { NewCropperComponent } from './components/new-cropper/new-cropper.component';
import { TextCropperComponent } from './components/text-cropper/text-cropper.component';
import { StepOneComponent } from './components/query-params/step-one/step-one.component';
import { StepTwoComponent } from './components/query-params/step-two/step-two.component';
import { StepThreeComponent } from './components/query-params/step-three/step-three.component';
import { StepFourComponent } from './components/query-params/step-four/step-four.component';
import { StepMainComponent } from './components/query-params/step-main/step-main.component';
import { FormAndPartnerComponent } from './components/form-and-partner/form-and-partner.component';
import { HostlisterAndHostbindingComponent } from './components/hostlister-and-hostbinding/hostlister-and-hostbinding.component';
import { HostDirective } from './components/directive';
import { UpdateValueWithIndexComponent } from './components/update-value-with-index/update-value-with-index.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { SelectDisabledComponent } from './components/select-disabled/select-disabled.component';
import { CountryCodeComponent } from './components/country-code/country-code.component';
import { CalBackFunctionsComponent } from './components/cal-back-functions/cal-back-functions.component';
import { FormThemesColorComponent } from './components/form-themes-color/form-themes-color.component';
import { NotificationsComponent } from './components/notifications/notifications.component';








interface NgxSpinnerConfig {
  type?:any;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyDetailsComponent,
    ContactDetailsComponent,
    KycOnlineComponent,
    RegisterFormComponent,
    LoginComponent,
    StepParentComponent,
    SignupInfoComponent,
    PersonalInfoComponent,
    ProfessinalInfoComponent,
    SuccessfullPageComponent,
    FormArrayComponent,
    SlideNavComponent,
    AngularTimerComponent,
    AddAndRemoveArrayComponent,
    NgxEditorComponent,
    QuillEditorComponent,
    FilterItemsComponent,
    ReactiveFormsComponent,
    ParentComponent,
    ChildComponent,
    UploadAllDocumentsComponent,
    PanComponent,
    SignatureComponent,
    BankComponent,
    ImageCroppedComponent,
    ChildTwoComponent,
    StringMethodsComponent,
    ArrayMethodsComponent,
    VideoRecorderComponent,
    SideNavComponent,
    MainBarComponent,
    ParentBarComponent,
    PaymentGatewayComponent,
    InstallRazorpayComponent,
    ActiveColorsComponent,
    AddCartComponent,
    CurdComponent,
    CalculatorComponent,
    OrderTrackingComponent,
    NgxChartsComponent,
    SelectImageComponent,
    SwitchMethodComponent,
    BoxArrayComponent,
    ShowHideComponent,
    PraticeComponent,
    BankDetailsComponent,
    SearchPipe,
    PraticeOnArrayComponent,
    PracticeOnFilterComponent,
    NewCropperComponent,
    TextCropperComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepMainComponent,
    FormAndPartnerComponent,
    HostlisterAndHostbindingComponent,
    HostDirective,
    UpdateValueWithIndexComponent,
    DateFilterComponent,
    SelectDisabledComponent,
    CountryCodeComponent,
    CalBackFunctionsComponent,
    FormThemesColorComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgxOtpInputModule,
    NgxEditorModule,ImageCropperModule,
    NgApexchartsModule,
    NgxImageZoomModule,
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
