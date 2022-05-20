import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CadastroturmaComponent } from './cadastroturma/cadastroturma.component';
import { CadastroalunoComponent } from './cadastroaluno/cadastroaluno.component';
import { GeraalunturmComponent } from './geraalunturm/geraalunturm.component';
import { CadastromateriaComponent } from './cadastromateria/cadastromateria.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    CadastroturmaComponent,
    CadastroalunoComponent,
    GeraalunturmComponent,
    CadastromateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
