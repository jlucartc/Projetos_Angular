import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BuscaComponent } from './views/busca/busca.component';
import { HomeComponent } from './views/home/home.component';
import { MarcasComponent } from './views/marcas/marcas.component';
import { LojaComponent } from './views/loja/loja.component';
import { LojaProdutoComponent } from './views/loja-produto/loja-produto.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'buscar', component: BuscaComponent},
{path: 'loja/:id', component: LojaComponent},
{path: 'loja/:id/produto/:idProduto', component: LojaProdutoComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(routes, {enableTracing : true});
