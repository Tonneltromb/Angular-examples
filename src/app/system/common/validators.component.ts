import {FormControl} from '@angular/forms';

export class ValidatorsComponent {
  static nameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return {'userName': true};
    }
    return null;
  }
}
