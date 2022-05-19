import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CadastroturmaComponent } from './cadastroturma/cadastroturma.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    CadastroturmaComponent
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
