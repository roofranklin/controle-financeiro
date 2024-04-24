import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdicionarTransacaoComponent } from './adicionar-transacao/adicionar-transacao.component';
import { ListarTransacoesComponent } from './listar-transacoes/listar-transacoes.component';
import { SessionTimerComponent } from './session-timer/session-timer.component';

export const routes: Routes = [
    { path: '', component: ListarTransacoesComponent },
    { path: 'adicionar', component: AdicionarTransacaoComponent },
    { path: 'sessao', component: SessionTimerComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
