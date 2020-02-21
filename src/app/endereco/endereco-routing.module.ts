import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoComponent } from './endereco.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', component: EnderecoComponent },
    { path: 'editar', component: FormComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
