import { TabelaComponent } from './../componentes/tabela/tabela.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartaoComponent } from '../componentes/cartao/cartao.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CartaoComponent,
    TabelaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 })
export class DashboardModule { }
