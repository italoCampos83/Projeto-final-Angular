import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
