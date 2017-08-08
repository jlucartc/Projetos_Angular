import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from './marcas/marcas.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { PaginaBuscaComponent } from './pagina-busca/pagina-busca.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MarcasComponent, HomeComponent, BuscaComponent, PaginaBuscaComponent],
  exports : [ MarcasComponent ]
})
export class ViewsModule { }
