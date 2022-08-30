import { HttpClient } from '@angular/common/http';
import { Modelos } from 'src/app/veiculos/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos/veiculos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  veiculo !: Modelos;

  constructor(private http: HttpClient,
  private veiculosService: VeiculosService
  ) { }

  ngOnInit(): void {

  }


}
