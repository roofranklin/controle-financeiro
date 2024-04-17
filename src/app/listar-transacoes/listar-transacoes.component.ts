import { Component } from '@angular/core';
import { NgStyle, NgIf, NgFor } from '@angular/common';

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
      NgFor
    ],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  // INTERPOLAÇÃO DE VARIAVEIS
  public nome = 'Roosevelt'; 
  public sobrenome = 'Santos';

  public boasVindas() {
    return `Olá ${this.nome} ${this.sobrenome}, seja bem vindo!`;
  }

  public titulo = 'Controle Financeiro';

  // INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 2122.64;
  public despesas = 1025.12;

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
  public usuario = 'joao.silva';

  // LISTA DE TRANSAÇÕES
  public transacoes = [
    {
      'id': 1,
      'nome': 'Recebimento de Salário',
      'tipo': 'receita',
      'valor': 8000,
      'data': new Date()
    },
    {
      'id': 2,
      'nome': 'Pagamento de Aluguel',
      'tipo': 'despesa',
      'valor': 2000,
      'data': new Date()
    },
    {
      'id': 3,
      'nome': 'Conta de Luz',
      'tipo': 'despesa',
      'valor': 300,
      'data': new Date()
    },
    {
      'id': 4,
      'nome': 'Conta de Internet',
      'tipo': 'despesa',
      'valor': 120,
      'data': new Date()
    },
    {
      'id': 5,
      'nome': 'Recebimento de Horas Extras',
      'tipo': 'receita',
      'valor': 300,
      'data': new Date()
    }
  ];
}
