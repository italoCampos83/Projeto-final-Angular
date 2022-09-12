import { VeiculosDadosService } from '../../veiculos/veiculos-dados.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, distinctUntilChanged, switchMap } from 'rxjs';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  inputValue!: string;
  tabelaInput = new FormControl();
  veiculosData$ = this.tabelaInput.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length == 20),
    distinctUntilChanged(),
    switchMap((valorDigitado) =>
      this.veiculosDadosService.getVeiculosData(valorDigitado)
    )
  );

  constructor(private veiculosDadosService: VeiculosDadosService) { }

  ngOnInit(): void {
  }

}
