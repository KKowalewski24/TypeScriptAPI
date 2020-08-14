const API_PREFIX: string = "api";
const V_1: string = "v1";
const API_DOCS: string = "api-docs";

const CLIENTS: string = "clients";
const DEVELOPERS: string = "developers";
const TECHNOLOGIES: string = "technologies";
const PARAM_ID: string = ":id";

export const SLASH: string = "/";
export const PATH_API_DOCS: string = SLASH + API_DOCS;
export const PATH_API_PREFIX: string = SLASH + API_PREFIX + SLASH + V_1;

export const PATH_CLIENTS: string = SLASH + CLIENTS;
export const PATH_CLIENTS_PARAM_ID: string = PATH_CLIENTS + SLASH + PARAM_ID;

export const PATH_DEVELOPERS: string = SLASH + DEVELOPERS;
export const PATH_DEVELOPERS_PARAM_ID: string = PATH_DEVELOPERS + SLASH + PARAM_ID;

export const PATH_TECHNOLOGIES: string = SLASH + TECHNOLOGIES;
export const PATH_TECHNOLOGIES_PARAM_ID: string = PATH_TECHNOLOGIES + SLASH + PARAM_ID;

export const PATH_DIR_CONTROLLER: string = "/controller/*.ts";
export const PORT: number = 3000;
