import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './componentes/home/home.component';
import { LojasComponent } from './componentes/lojas/lojas.component';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './componentes/produto-detalhes/produto-detalhes.component';
import { LojaDetalhesComponent } from './componentes/loja-detalhes/loja-detalhes.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DbService } from './servicos/db.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LojasComponent,
    MarcasComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent,
    LojaDetalhesComponent
  ],
  imports: [
    BrowserModule,HttpModule,routing
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})



export class AppModule { }
