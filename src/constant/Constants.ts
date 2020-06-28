const API_PREFIX: string = "api";
const V_1: string = "v1";
const API_DOCS: string = "api-docs";

const CLIENT: string = "client";
const DEVELOPER: string = "developer";
const TECHNOLOGY: string = "technology";

export const SLASH: string = "/";
export const PATH_API_DOCS: string = SLASH + API_DOCS;
export const PATH_API_PREFIX: string = SLASH + API_PREFIX + SLASH + V_1;

export const PATH_CLIENT: string = SLASH + CLIENT;
export const PATH_DEVELOPER: string = SLASH + DEVELOPER;
export const PATH_TECHNOLOGY: string = SLASH + TECHNOLOGY;

export const PATH_DIR_CONTROLLER: string = "/controller/*.ts";

export const PORT: number = 3000;
