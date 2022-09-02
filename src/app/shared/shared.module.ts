import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MensagemModule,
    CabecalhoModule
  ],
  exports: [
    MensagemModule,
    CabecalhoModule
  ]
})
export class SharedModule { }
