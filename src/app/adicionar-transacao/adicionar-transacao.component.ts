import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from '../uppercase.pipe';
import { EmailPipe } from '../email.pipe';

@Component({
  selector: 'app-adicionar-transacao',
  imports: [ RouterLink, FormsModule, UppercasePipe, EmailPipe  ],
  standalone: true,
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {

  public titulo = 'Controle Financeiro';
  public usuario = 'roosevelt.santos';
  public tipoTransacao = 'receita';
  public descricaoTransacao!: string;

  constructor(private http: HttpClient) {}

  // EVENT BINDING
  public transacaoAdicionada!: string;
  public adicionarTransacao(transacaoValue: any) {

    const novaTransacao = {
      id: Date.now().toString(),
      nome: transacaoValue.nome,
      tipo: transacaoValue.tipo,
      valor: transacaoValue.valor,
      data: new Date().toISOString()
    };

    this.http.post('http://localhost:3000/lista-transacoes', novaTransacao)
    .subscribe((response) => {
      console.log(response);
      return this.transacaoAdicionada = 'Transação adicionada com sucesso!';
    }, (error) => {
      console.log(error);
      return this.transacaoAdicionada = 'Erro ao adicionar transação';
    });
  }

  // 2WAY BINDING
  public valorTransacao!: number;
}
