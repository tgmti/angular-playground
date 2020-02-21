import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArvoreRoutingModule } from './arvore-routing.module';
import { ArvoreComponent } from './arvore.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ArvoreComponent],
  imports: [
    CommonModule,
    ArvoreRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ArvoreModule { }
