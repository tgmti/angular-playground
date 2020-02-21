import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'endereco', loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule) },
  { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'arvore', loadChildren: () => import('./arvore/arvore.module').then(m => m.ArvoreModule) },
  { path: 'arrasta-solta', loadChildren: () => import('./arrasta-solta/arrasta-solta.module').then(m => m.ArrastaSoltaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
