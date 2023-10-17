import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  formdata: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formdata = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['',Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formdata.valid) {
      let formData = this.formdata.value;
      console.log('Form Data:', formData);
      this.formdata.reset();
    } else {
      console.error('Form is not valid.');
    }
  }
}
