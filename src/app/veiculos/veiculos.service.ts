import { pluck } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Veiculo, VeiculosAPI } from 'src/app/veiculos/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getVeiculo() {
    return this.httpClient.get<VeiculosAPI>(`${API}/vehicle`).pipe(pluck('vehicles'));
  }

  getVeiculoId(id: string) {
    return this.httpClient.get<Veiculo>(`${API}/vehicle/${id}`);
  }
}
