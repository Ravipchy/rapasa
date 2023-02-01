import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  // resetPasswordForm: FormGroup | any;
  isSubmitted = false;

  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';

  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),Validators.minLength(6)
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),Validators.minLength(6)
  ]);

  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
  );

  constructor(private router: Router, public formBuilder: FormBuilder,private toastController: ToastController) {}

  // ngOnInit() {
  //   this.resetPasswordForm = this.formBuilder.group({
  //     newPassword: ['', Validators.required],
  //     confirmPassword: ['', [Validators.required]],
  //   })
  // }
  get errorControl() {
    return this.resetPasswordForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.resetPasswordForm.valid) {
      console.log('Please provide all the required values!');
    } else {
      this.router.navigate(['dashboard']);
      console.log(this.resetPasswordForm.value);
    }
  }

  goTologin(){
    this.router.navigate(['signin']);
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
