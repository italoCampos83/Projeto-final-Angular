import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';
import { VeiculosModule } from 'src/app/veiculos/veiculos.module';



@NgModule({
  declarations: [
    CartaoComponent
  ],
  imports: [
    CommonModule,
    VeiculosModule
  ],
  exports: [
    CartaoComponent
  ]
})
export class CartaoModule { }
