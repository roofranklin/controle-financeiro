import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from './transacoes';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private baseUrl = 'http://localhost:3000/lista-transacoes';

  constructor(private http: HttpClient) { }

  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.baseUrl);
  }

}
