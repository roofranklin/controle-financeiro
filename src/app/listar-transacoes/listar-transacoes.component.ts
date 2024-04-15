import { Component } from '@angular/core';
import { CurrencyPipe } from '../currency.pipe';
import { UppercasePipe } from '../uppercase.pipe';
import { LowercasePipe } from '../lowercase.pipe';
import { DataPipe } from '../data.pipe';
import { EmailPipe } from '../email.pipe';

@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: [ CurrencyPipe, UppercasePipe, LowercasePipe, DataPipe, EmailPipe ],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  // INTERPOLAÇÃO DE VARIAVEIS
  public nome = 'Roosevelt'; 
  public titulo = 'Controle Financeiro';
  public boasVindas = 'Olá ' + this.nome + ', Bem vindo(a) ao nosso sistema!';

  // INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 4125.32;
  public despesas = 349.50;

  public saldo() {
    return this.receitas - this.despesas
  }

  // PROPERTY BINDING
  public tipoSaldo() {
    let diferenca = this.receitas - this.despesas;
    let classSaldo = diferenca >= 0 ? 'saldo-positivo' : 'saldo-negativo';
    return classSaldo;
  }   

  // TREINANDO PIPE
  public date = new Date();
  public usuario = 'roosevelt.santos';
}
