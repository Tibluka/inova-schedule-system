import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

class questionario {
  forEach(arg0: (element: any) => void) {
    throw new Error("Method not implemented.");
  }
  nome: string;
  email: string;
  telefone: string;
  documentos: string;
  dia: string;
  horario: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  questionario: questionario = new questionario()

  constructor(private apiService: ApiService) {

  }

  async getQuestions() {
    this.questionario = await this.apiService.getApi<any>('agendamento/' + '12' + '/questionario').toPromise()
    return this.questionario
  }

}

