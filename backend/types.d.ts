declare namespace Express {
  export interface Request {
    userName: string;
    id: string;
    role: string;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    UDP_PORT: number;
    JWT_ACCESS: string;
    JWT_REFRESH: string;
  }
}
