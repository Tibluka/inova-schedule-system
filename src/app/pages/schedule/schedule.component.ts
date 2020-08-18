import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { InfoService } from 'src/app/services/info.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  dias_disponiveis = 'dias que estão disponíveis'
  availableTimes = ['9h:30', '10h:30', '13h:30', '15h:30', '17h:00']
  array = [{ id: "nome" }, { id: "email" }, { id: "telefone" }, { id: "documentos" }]

  profileForm = this.fb.group({
    nome: [''],
    email: [''],
    telefone: [''],
    documentos: [''],
    dia: [''],
    horario: ['']
  });

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return (day !== 0 && day !== 6);
  }

  constructor(private fb: FormBuilder, public infoService: InfoService) {
  }

  ngOnInit(): void {
    this.infoService.getQuestions()
    this.getFormControlFields()
  }

  getFields() {
    console.log(this.infoService.questionario)

  }

  getFormControlFields() {
    this.array.forEach(element => {
      console.log(this.profileForm.controls[element.id].setValidators([Validators.required]))
    })
  }


  onSubmit() {
    console.warn(this.profileForm.value)
  }

  getValueForms(par) {
    return this.profileForm.get(par);
  }
  get getEmail() {
    return this.profileForm.get('email');
  }
  get dia() {
    return this.profileForm.get('dia');
  }

}
