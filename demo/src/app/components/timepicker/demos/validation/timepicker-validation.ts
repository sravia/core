import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ngbd-timepicker-validation',
  template: require('./timepicker-validation.html')
})
export class NgbdTimepickerValidation {
  time;

  lunchControl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const result = {};

    if (value.hour < 12) {
      result['tooEarly'] = true;
    }
    if (value.hour > 13) {
      result['tooLate'] = true;
    }
    if (isNaN(value.minute)) {
      result['noMinutesSet'] = true;
    }

    return Object.keys(result).length > 0 ? result : null;
  });
}
