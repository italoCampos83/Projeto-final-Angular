import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VeiculosDataAPI } from '../model/veiculos-dados';
import { pluck } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VeiculosDadosService {

constructor(
  private httpClient: HttpClient
) { }

getVeiculosData(valor?: string) {
  const params = valor ? new HttpParams().append('valor', valor) : undefined;
  return this.httpClient
    .get<VeiculosDataAPI>(`${API}/vehicleData`, {
      params,
    })
    .pipe(pluck('vehicleData'));
}

}
