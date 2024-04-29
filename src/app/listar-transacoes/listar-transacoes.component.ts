import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle, NgIf, NgFor } from '@angular/common';

import { TransacaoService } from '../transacoes.service';
import { Transacao } from '../transacoes';

import { CurrencyPipe } from '../currency.pipe';
import { UppercasePipe } from '../uppercase.pipe';
import { LowercasePipe } from '../lowercase.pipe';
import { DataPipe } from '../data.pipe';
import { EmailPipe } from '../email.pipe';

@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: 
    [ 
      CurrencyPipe,
      UppercasePipe,
      LowercasePipe,
      DataPipe,
      EmailPipe,
      NgStyle,
      NgIf,
      NgFor,
      RouterLink
    ],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent implements OnInit {


  // REQUISIÇÕES HTTP GET
  transacoes: Transacao[] = [];

  constructor(private transacaoService: TransacaoService) {}

  ngOnInit(): void {
    this.getTransacoes();
  }

  getTransacoes(): void {
    this.transacaoService.getTransacoes()
      .subscribe(transacoes => this.transacoes = transacoes);
  }

  excluirTransacao(id: number): void {
    this.transacaoService.excluirTransacao(id)
    .subscribe(() => {
      console.log('Transação excluída com sucesso!');
      this.getTransacoes();
    }, (error) => {
      console.log(error);
    });
  }

  // INTERPOLAÇÃO DE VARIAVEIS
  public nome = 'Roosevelt'; 
  public sobrenome = 'Santos';

  public boasVindas() {
    return `Olá ${this.nome} ${this.sobrenome}, seja bem vindo!`;
  }

  public titulo = 'Controle Financeiro';

  // INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 2122.64;
  public despesas = 3025.12;

  public saldo() {
    return this.receitas - this.despesas
  }

  // PROPERTY BINDING
  public tipoSaldo() {
    let classSaldo = this.saldo() >= 0 ? 'saldo-positivo' : 'saldo-negativo';
    return classSaldo;
  }   

  // TREINANDO PIPE
  public date = new Date();
  public usuario = 'roosevelt.santos';

}
