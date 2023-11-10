/**
 * Representa o componente de login da aplicação.
 *
 * Este componente permite que os usuários acessem a aplicação por meio do serviço do Spotify.
 */
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Construtor da classe LoginComponent.
   *
   * @param spotifyService - O serviço do Spotify utilizado para autenticação.
   * @param router - O serviço de roteamento do Angular.
   */
  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
  ) { }

  /**
   * Método de inicialização do Angular executado quando o componente é criado.
   * Verifica se há um token de autenticação na URL e, se houver, define-o como token de acesso e redireciona para a página do jogador.
   */
  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  /**
   * Verifica a URL para um token de autenticação e, se encontrado, define-o como token de acesso e redireciona para a página do jogador.
   */
  verificarTokenUrlCallback() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if (!!token) {
      this.spotifyService.definirAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  /**
   * Abre a página de login do Spotify redirecionando o usuário para a URL de login.
   */
  abrirPaginaLogin() {
    window.location.href = this.spotifyService.obterUrlLogin();
  }
}