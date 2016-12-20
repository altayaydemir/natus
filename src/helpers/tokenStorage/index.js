const tokenKeyword = 'token';

const TokenStorage = {
  get: () => localStorage.getItem(tokenKeyword),
  set: token => localStorage.setItem(tokenKeyword, token),
  destroy: () => localStorage.removeItem(tokenKeyword),
};

export default TokenStorage;
