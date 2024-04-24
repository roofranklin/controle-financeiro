import { Component, OnInit } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-session-timer',
  standalone: true,
  imports: [ NgIf],
  templateUrl: './session-timer.component.html',
  styleUrl: './session-timer.component.scss'
})
export class SessionTimerComponent implements OnInit {
  timerObservable: Observable<number> | undefined;
  timerSubscription: Subscription | undefined;
  tempoCorrido: number = 0; // TEMPO EM SEGUNDOS
  avisoModerado: boolean = false;
  avisoAlto: boolean = false;
  avisoMensagem: string | undefined;

  constructor() {}

  ngOnInit(): void {
    // CRIA UM OBSERVABLE QUE EMITE UM VALOR APÓS UM PERIODO DE TEMPO
    this.timerObservable = timer(0, 1000); // EMITE UM A CADA SEGUNDO

    this.timerSubscription = this.timerObservable.subscribe(() => {
      this.tempoCorrido++;
      if (this.tempoCorrido === 60) {
        this.efetuarLogout();
      }
      else if (this.tempoCorrido === 45) {
        this.exibirAvisoAlto("Você será deslogado em 15 segundos");
      }
      else if (this.tempoCorrido === 30) {
        this.exibirAvisoModerado("Você será deslogado em 30 segundos");
      }
    });
  }

  // FUNÇÕES QUE O OBSERVABLE VAI EXECUTAR
  exibirAvisoModerado(mensagem: string): void {
    this.avisoModerado = true;
    this.avisoMensagem = mensagem;
  }
  exibirAvisoAlto(mensagem: string): void {
    this.avisoModerado = false;
    this.avisoAlto = true;
    this.avisoMensagem = mensagem;
  }

  efetuarLogout(): void {
    alert('Sessão expirada! Efetuando logout...');
  }
}
