export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  authEndpoint: 'https://accounts.spotify.com/authorize',
  clientId: '529181d8245d4f909bbb46354dde07a4',
  redirectUrl: 'https://teste-f59ed.web.app/login',
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas
  ]
}
