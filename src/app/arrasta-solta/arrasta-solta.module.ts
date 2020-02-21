import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrastaSoltaRoutingModule } from './arrasta-solta-routing.module';
import { ArrastaSoltaComponent } from './arrasta-solta.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [ArrastaSoltaComponent],
  imports: [
    CommonModule,
    ArrastaSoltaRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ]
})
export class ArrastaSoltaModule { }
