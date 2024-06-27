import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-code',
  templateUrl: './country-code.component.html',
  styleUrls: ['./country-code.component.scss']
})
export class CountryCodeComponent {

  phoneNumberForm!: FormGroup;

  countryCodes=[
    { name: 'United States', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Australia', code: '+61' },
    { name: 'India', code: '+91' },
   
  ];

  constructor(private fb: FormBuilder) {
    this.phoneNumberForm = this.fb.group({
      countryCode: [''],  // default value
      phoneNumber: ['']
    });
  }

  ngOnInit(): void {
    this.phoneNumberForm.get('phoneNumber')?.valueChanges.subscribe(value => {
      this.updateCountryCode(value);
    });
  }

  updateCountryCode(phoneNumber: string): void {
    if (phoneNumber) {
      // Sort country codes by length in descending order to match the longest possible prefix first
      const sortedCountryCodes = this.countryCodes.sort((a, b) => b.code.length - a.code.length);
      
      for (let country of this.countryCodes) {
        const prefix = country.code.replace('+', ''); // remove the '+' for comparison
        if (phoneNumber.startsWith(prefix)) {
          this.phoneNumberForm.get('countryCode')?.setValue(country.code, { emitEvent: false });
          break;
        }
      }
    }
  }

 
}
