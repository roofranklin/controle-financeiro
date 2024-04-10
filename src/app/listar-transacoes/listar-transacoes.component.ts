import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-transacoes',
  standalone: true,
  imports: [],
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  // INTERPOLAÇÃO DE VARIAVEIS
  public nome = 'Roosevelt'; 
  public titulo = 'Controle Financeiro';
  public boasVindas = 'Olá ' + this.nome + ', Bem vindo(a) ao nosso sistema!';

  // INTERPOLAÇÃO USANDO RETORNO DE UMA FUNÇÃO
  public receitas = 2000;
  public despesas = 500;

  public saldo() {
    return this.receitas - this.despesas
  }

    // PROPERTY BINDING
    public valorSaldo = 'saldo-positivo';
    
}
