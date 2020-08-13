import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  
dias_disponiveis = ''

  profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    details: ['', Validators.required],
    date: ['', Validators.required]
  });

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return (day !== 0 && day !== 6);
  }

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

  get datepicker() {
    return this.profileForm.get('datepicker');
  }

}
