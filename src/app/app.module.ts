import { NgModule } from '@angular/core';
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
    ActiveColorsComponent
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
    NgxEditorModule,ImageCropperModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
