import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { DbService } from './services/db.service';
import { routing } from './app.routing';
import { BuscaComponent } from './views/busca/busca.component';
import { HomeComponent } from './views/home/home.component';
import { MarcasComponent } from './views/marcas/marcas.component';
import { LojaComponent } from './views/loja/loja.component';
import { LojaProdutoComponent } from './views/loja-produto/loja-produto.component';

@NgModule({
  declarations: [
    AppComponent,BuscaComponent,HomeComponent,MarcasComponent,LojaComponent,LojaProdutoComponent
  ],
  imports: [
    BrowserModule,HttpModule,routing
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})



export class AppModule { }
