# TypeScriptAPI

### Basic Steps
* Run `yarn init ` then create .gitignore and src/index.ts 
* Run `tsc --init` then prepare config of tsconfig.json - remember to uncomment below options
```
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
 ```
* Run `yarn add reflect-metadata dotenv` 
* Run `yarn add -D typescript ts-node-dev @types/node @types/dotenv`

### TypeORM
* Run `yarn add typeorm ${chosen DB driver e.g. pg}`

### Express.js and Routing-Controllers
* Run `yarn add body-parser class-transformer class-validator cors express multer routing-controllers typedi`
* Run `yarn add -D @types/body-parser @types/cors @types/express @types/multer`

### Swagger API Docs
* Run `yarn add swagger-ui-express`
* Add swagger.json with proper data - read swagger official docs
* Add in tsconfig.json `"resolveJsonModule": true`
* In main file import 
```
// @ts-ignore
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json"
```
* Add swagger to express instance
```
app.use($SELECTED_PATH$, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

##### Scripts in package.json
```
  "scripts": {
    "start": "ts-node-dev -r dotenv/config --respawn --transpileOnly src",
    "start:prod": "tsc && node build/index.js",
    "tsc": "tsc",
    "tsc:watch": "tsc --watch",
    "test": "jest",
    "test:cov": "jest --coverage"
  }
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

###### Cascade Delete
Unfortunately I was not able to figure out how to delete selected entities 
or delete whole table content. 
I tried setting `cascade: true`, `cascade: ["remove]` also `onDelete: "CASCADE"`. 
Deleting manually by calling Repository API method also did not help. 

#### Useful resources
* [Routing-Controllers](https://github.com/typestack/routing-controllers)
* [Medium](https://medium.com/@d_danailov/nodejs-microservice-importing-millions-records-on-amazon-s3-typescript-and-routing-controllers-3a296c622a3f)
* [CodeBrains](https://codebrains.io/express-typescript-routing-controllers/)
