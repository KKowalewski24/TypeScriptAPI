# TypeScriptAPI
```
"scripts": {
    "start": "ts-node-dev --respawn src/index.ts",
    "tsc": "tsc --watch"
  }
```
```
tsc --init
yarn add express reflect-metadata body-parser cors typeorm pg 
yarn add -D typescript ts-node-dev @types/node @types/express @types/body-parser @types/cors
```
##### PostgreSQL config
```
export const connection = createConnection({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "admin",
    "database": "typescript-api",
    "logging": false,
    "synchronize": true,
    "entities": [
        "src/entity/**/*.ts"
    ]
});
```
