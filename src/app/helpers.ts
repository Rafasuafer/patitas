import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class CustomValidators {
  static matchControls(
    control: AbstractControl | null,
    controlTwo: AbstractControl | null
  ): ValidatorFn {
    return () => {
      if (control?.value !== controlTwo?.value) return { 'no-match': true };
      return null;
    };
  }
}
