import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/home/home.component';
import { PedidosComponent } from './views//pedidos.component';
import { LojasComponent } from './views/lojas/lojas.component';
import { MarcasComponent } from './views/marcas/marcas.component';
import { PaginaBuscaComponent } from './views/pagina-busca/pagina-busca.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: '/buscar', component: PaginaBuscaComponent},
{path: '/loja/:id', component: ProdutosComponent},
{path: '/loja/:id/produto/:idProduto', component: PedidosComponent}
]
