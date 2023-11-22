export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  authEndpoint: 'https://accounts.spotify.com/authorize',
  // Gustavo Id
  clientId: '529181d8245d4f909bbb46354dde07a4',

  // Amanda Id
  // clientId: 'e61824a2a6f845008eda73ac7fa72672',
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
