import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from "@emailjs/browser"

@Component({
  selector: 'app-section-e',
  templateUrl: './section-e.component.html',
  styleUrls: ['./section-e.component.scss']
})
export class SectionEComponent implements OnInit, OnDestroy {
  myForm = new FormGroup<any>({});
  constructor(
    private fb: FormBuilder
  ) { }
  value3: string | undefined;
  ngOnInit(): void {
    const phoneNumberPattern = /^[0-9]{10}$/;
    this.myForm = this.fb.group({
      formName: new FormControl(null, [Validators.required]),
      formEmailId: new FormControl(null, [Validators.required, Validators.email]),
      formPhoneNumber: new FormControl(null, [Validators.required, Validators.pattern(phoneNumberPattern)]),
      formNote: new FormControl(null)
    });


  }
  onSubmit() {
    this.myForm?.markAllAsTouched();
    if (this.myForm?.valid) {
      this.sendEmail()
    }

  }
  async sendEmail() {
    emailjs.init('8C99KU5DrBGxlufwZ')
    let response = emailjs.send("service_gip6rw1", "template_2zq7lxm", {
      name: this.myForm.get('formName')?.value ?? '',
      emailID: this.myForm.get('formEmailId')?.value ?? '',
      phoneNo: this.myForm.get('formPhoneNumber')?.value ?? '',
      note: this.myForm.get('formNote')?.value ?? '',
      email: "georginjos@gmail.com",

    });
    const alertElement = document.getElementById('customAlert');
    if (alertElement) {
      alertElement.style.display = 'block';
      alertElement.classList.add('show');
    }
    setTimeout(() => {
      if (alertElement) {
        alertElement.classList.remove('show'); 
      }
    }, 5000);
    this.myForm.reset();
  }
  ngOnDestroy(): void {

  }
}
