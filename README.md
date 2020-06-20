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

##### Scripts in package.json
```
  "scripts": {
    "start": "ts-node-dev -r dotenv/config --respawn src",
    "tsc": "tsc",
    "tsc:watch": "tsc --watch"
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

#### Useful resources
* [Routing-Controllers](https://github.com/typestack/routing-controllers)
* [Medium](https://medium.com/@d_danailov/nodejs-microservice-importing-millions-records-on-amazon-s3-typescript-and-routing-controllers-3a296c622a3f)
* [CodeBrains](https://codebrains.io/express-typescript-routing-controllers/)
