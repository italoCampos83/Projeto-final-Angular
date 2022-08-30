import { Veiculo } from 'src/app/veiculos/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos/veiculos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  veiculos$ = this.veiculosService.getVeiculo();
  veiculoId!: string;
  veiculoSelecionado!: Veiculo;

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
  }

  setaVeiculoId(id: string) {
    this.veiculosService.getVeiculoId(id).subscribe((veiculoSelecionado) => {
      this.veiculoSelecionado = veiculoSelecionado;
    });
  }



}
