import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArvoreComponent } from './arvore.component';

const routes: Routes = [{ path: '', component: ArvoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArvoreRoutingModule { }
