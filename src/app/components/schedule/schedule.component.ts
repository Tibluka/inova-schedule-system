import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {


  profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    details: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  get fullName() {
    return this.profileForm.get('fullName');
  }
  get email() {
    return this.profileForm.get('email');
  }

}
