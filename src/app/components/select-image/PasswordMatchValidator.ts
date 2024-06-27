import { FormGroup } from '@angular/forms';

export function PasswordMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors['passwordMismatch']) {
            // return if another validator has already found an error on the matchingControl
            return; 
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordMismatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
