import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-transacao',
  imports: [ FormsModule ],
  standalone: true,
  templateUrl: './adicionar-transacao.component.html',
  styleUrl: './adicionar-transacao.component.scss'
})
export class AdicionarTransacaoComponent {

  // EVENT BINDING
  public transacaoAdicionada!: string;
  public adicionarTransacao() {
    return this.transacaoAdicionada = 'Transação adicionada com sucesso!';
  }

  // 2WAY BINDING
  public valorTransacao!: number;
}
