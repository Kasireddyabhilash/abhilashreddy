import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {
  formdata: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.formdata = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  formValidate() { 
      let formData = this.formdata.value;
      console.log('Form Data', formData);
      this.formdata.reset();
  }
}
