import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-transacao',
  standalone: true,
  imports: [],
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {

  // EVENT BINDING
  public transacaoAdicionada!: string;

  public adicionarTransacao() {
    return this.transacaoAdicionada = 'Transação adicionada com sucesso!';
  }
}
