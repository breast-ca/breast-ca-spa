export const IS_DEV_MODE = import.meta.env.DEV;

export const API_HOST = IS_DEV_MODE
  ? "http://localhost:8000/api"
  : "https://breast-ca.ru/api";
export const WS_HOST = IS_DEV_MODE
  ? "http://localhost:8000/"
  : "https://breast-ca.ru/";
