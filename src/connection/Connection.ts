import {createConnection} from "typeorm";

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

export default connection;
    