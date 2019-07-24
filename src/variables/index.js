let HOST;
switch (process.env.NODE_ENV) {
  case 'development': HOST = 'localhost:3000';
    break;
  case 'test': HOST = 'localhost:3000';
    break;
  case 'production': 
    if (process.env.hasOwnProperty('HEROKU_STAGING')) {
      HOST = "codewords-server-staging.herokuapp.com";
    } else {
      HOST = "codewords-server.herokuapp.com";
    }
    break;
  default: console.dir(process.env);
}

console.dir(process.env);

export const API_ROOT = `http://${HOST}/api`;
export const API_WS_ROOT = `ws://${HOST}/cable`;
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

