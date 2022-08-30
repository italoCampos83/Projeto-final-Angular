import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Veiculo } from 'src/app/veiculos/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiVeiculos;

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getVeiculo(veiculo: string): Observable<Veiculo> {
    return this.httpClient.get<Veiculo>(`${API}`);
  }
}
