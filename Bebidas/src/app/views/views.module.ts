import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from './marcas/marcas.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { LojaComponent } from './loja/loja.component';
import { LojaProdutoComponent } from './loja-produto/loja-produto.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MarcasComponent, HomeComponent, BuscaComponent, LojaComponent, LojaProdutoComponent, SearchBoxComponent],
  exports : [ MarcasComponent ]
})
export class ViewsModule { }
