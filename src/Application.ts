import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import {PATH_API_DOCS, PATH_API_PREFIX, PATH_DIR_CONTROLLER} from "./constant/path-constants";
// @ts-ignore
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json"

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _expressApplication: express.Application;

    /*------------------------ METHODS REGION ------------------------*/
    constructor() {
        useContainer(Container);

        this._expressApplication = createExpressServer({
            controllers: [__dirname + PATH_DIR_CONTROLLER]
        });

        this._expressApplication.use(PATH_API_PREFIX + PATH_API_DOCS,
                swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this._expressApplication.use(bodyParser.json());
        this._expressApplication.use(cors);
    }

    get expressApplication(): express.Application {
        return this._expressApplication;
    }

    listen(port: number): void {
        this._expressApplication.listen(port);
    }
}
