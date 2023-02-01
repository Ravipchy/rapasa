import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TabNavigatorComponent } from './components/tab-navigator/tab-navigator.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupIndividualComponent } from './pages/signup/signup-individual/signup-individual.component';
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { AddAddressComponent } from './pages/addresses/add-address/add-address.component';
import { EditAddressComponent } from './pages/addresses/edit-address/edit-address.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { BookOndemandComponent } from './pages/book-now/book-ondemand/book-ondemand.component';
import { BookPermanentComponent } from './pages/book-now/book-permanent/book-permanent.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { ComponentSandboxComponent } from './components/component-sandbox/component-sandbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { OndemandBookingHistoryComponent } from './pages/booking-history/ondemand-booking-history/ondemand-booking-history.component';
import { PermanentBookingHistoryComponent } from './pages/booking-history/permanent-booking-history/permanent-booking-history.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { AppInfoComponent } from './pages/app-info/app-info.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HelpComponent } from './pages/help/help.component';
import { HelpchatComponent } from './pages/helpchat/helpchat.component';
import { AddCommentComponent } from './pages/add-comment/add-comment.component';
import { OfferComponent } from './pages/offer/offer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http/http-interceptor.service';
import { HttpService } from './services/http/http.service';
import { HttphelperService } from './services/http/http-helper.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TabNavigatorComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    SignupIndividualComponent,
    SignupCompanyComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    AddressesComponent,
    AddAddressComponent,
    EditAddressComponent,
    BookNowComponent,
    BookOndemandComponent,
    BookPermanentComponent,
    BookingHistoryComponent,
    ComponentSandboxComponent,
    OtpVerificationComponent,
    OndemandBookingHistoryComponent,
    PermanentBookingHistoryComponent,
    TermsAndConditionComponent,
    AppInfoComponent,
    SettingsComponent,
    HelpComponent,
    HelpchatComponent,
    AddCommentComponent,
    OfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    HttphelperService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService,multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
