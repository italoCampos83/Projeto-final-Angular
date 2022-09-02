import { TabelaComponent } from './tabela.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    FormData,
    ReactiveFormsModule
  ],

})
export class TabelaModule { }
