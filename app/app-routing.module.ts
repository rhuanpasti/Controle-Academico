import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroturmaComponent } from './cadastroturma/cadastroturma.component';

const routes: Routes = [
  {path: 'tcadastro', component: CadastroturmaComponent},
  {path: '', redirectTo:'/tcadastro',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
