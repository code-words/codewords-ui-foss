let GAME_HOST;
switch (window.location.hostname) {
  case 'localhost':
    GAME_HOST = 'localhost:3000';
    break;
  case 'playcodewords.com':
    GAME_HOST = 'codewords-server.herokuapp.com'
  default:
    GAME_HOST = window.location.hostname.replace('game', 'server');
}

console.dir(process.env);

export const API_ROOT = `http://${GAME_HOST}/api`;
export const API_WS_ROOT = `ws://${GAME_HOST}/cable`;
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
