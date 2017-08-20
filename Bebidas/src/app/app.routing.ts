import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './componentes/home/home.component';
import { LojasComponent } from './componentes/lojas/lojas.component';
import { MarcasComponent } from './componentes/marcas/marcas.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './componentes/produto-detalhes/produto-detalhes.component';
import { LojaDetalhesComponent } from './componentes/loja-detalhes/loja-detalhes.component';
import { AppComponent } from './app.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'lojas', component: LojasComponent },
{path: 'marcas', component: MarcasComponent},
{path: 'produtos', component: ProdutosComponent},
{path: 'loja/:id', component: LojaDetalhesComponent},
{path: 'produto/:id', component: ProdutoDetalhesComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(routes, {enableTracing : false});
