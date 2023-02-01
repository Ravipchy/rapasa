import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentSandboxComponent } from './components/component-sandbox/component-sandbox.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import { AddAddressComponent } from './pages/addresses/add-address/add-address.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { EditAddressComponent } from './pages/addresses/edit-address/edit-address.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupCompanyComponent } from './pages/signup/signup-company/signup-company.component';
import { SignupIndividualComponent } from './pages/signup/signup-individual/signup-individual.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { BookOndemandComponent } from './pages/book-now/book-ondemand/book-ondemand.component';
import { BookPermanentComponent } from './pages/book-now/book-permanent/book-permanent.component';
import { OndemandBookingHistoryComponent } from './pages/booking-history/ondemand-booking-history/ondemand-booking-history.component';
import { PermanentBookingHistoryComponent } from './pages/booking-history/permanent-booking-history/permanent-booking-history.component';
import { combineLatest } from 'rxjs';
import { TermsAndConditionComponent} from './pages/terms-and-condition/terms-and-condition.component';
import { AppInfoComponent } from './pages/app-info/app-info.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HelpComponent } from './pages/help/help.component';
import { HelpchatComponent } from './pages/helpchat/helpchat.component';
import { AddCommentComponent } from './pages/add-comment/add-comment.component';
import { OfferComponent } from './pages/offer/offer.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'dashboard',
  },
  {
    title: 'Signin to your account',
    path: 'signin',
    component: LoginComponent,
  },
  {
    title: 'Choose your account type',
    path: 'signup',
    // pathMatch: 'prefix',
    component: SignupComponent,
    // children: [
    //   // {
    //   //   title: 'Individual Signup',
    //   //   path: 'individual',
    //   //   component: SignupIndividualComponent,
    //   // },
    //   {
    //     title: 'Company Signup',
    //     path: 'company',
    //     component: SignupCompanyComponent,
    //   },
    // ],
  },
  // {
  //   title: 'Individual Signup',
  //   path: 'individual',
  //   component: SignupIndividualComponent,
  // },
  {
    title: 'dashboard',
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    title: 'Addresses',
    path: 'addresses',
    component: AddressesComponent,

  },
  {
    title: 'Edit Address',
    path: 'edit-address',
    component: EditAddressComponent,
  },
  {
    title: 'Add-address',
    path: 'add-address',
    component: AddAddressComponent,
  },
  {
    title: 'bookNow',
    path: 'book-now',
    component: BookNowComponent,
  },
  {
    title: 'Book Permanent',
    path: 'book-permanent',
    component: BookPermanentComponent,
  },
  {
    title: 'Book Ondemand',
    path: 'book-ondemand',
    component: BookOndemandComponent,
  },
  {
    title: 'Book Ondemand',
    path: 'book-ondemand/:type',
    component: BookOndemandComponent,
  },

  {
    title: 'BookingHistory',
    path: 'booking-history',
    component: BookingHistoryComponent,
  },
  {
    title:'Permanent Booking History',
    path:'permanent-booking-history',
    component:PermanentBookingHistoryComponent,
  },
  {
    title:'Ondemand Booking History ',
    path:'ondemand-booking-history',
    component:OndemandBookingHistoryComponent,
  },
  {
    title: 'Profile',
    path: 'profile',
    component: ProfileComponent,
  },
  {
    title: 'Edit profile',
    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {
    title: 'Test your components',
    path: 'component-sandbox',
    component: ComponentSandboxComponent,
  },
  {
    title: 'Enter your Phone no.',
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    title: 'Verify',
    path: 'otp-verification',
    component: OtpVerificationComponent,
  },
  {
    title: 'Create new password',
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    title: 'Help Info',
    path: 'component-sandbox',
    component: ComponentSandboxComponent,
  },
  {
    title: 'App Info',
    path: 'app-info',
    component: AppInfoComponent,
  },
  {
    title: 'Help Info',
    path: 'terms-and-condition',
    component:TermsAndConditionComponent,
  },

  {
    title: 'Settings',
    path: 'settings',
    component:SettingsComponent,
  },

  {
    title: 'Help',
    path: 'help',
    component: HelpComponent,
  },
  {
    title: 'HelpChat',
    path: 'helpchat',
    component: HelpchatComponent,
  },
  {
    title: 'Add-Comment',
    path: 'add-comment',
    component: AddCommentComponent,
  },
  {
    title: 'Offers',
    path: 'offers/:type',
    component: OfferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
