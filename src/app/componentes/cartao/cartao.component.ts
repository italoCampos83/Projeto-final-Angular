import { VeiculosService } from './../../veiculos/veiculos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/veiculos/veiculo.model';


@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

 @Input() modelo = '';

  constructor() { }

  ngOnInit(): void {

  }
}
