import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";
import {PATH_DIR_CONTROLLER} from "./constant/Constants";

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _expressApplication: express.Application;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor() {
        useContainer(Container);

        this._expressApplication = createExpressServer({
            controllers: [__dirname + PATH_DIR_CONTROLLER]
        });

        this._expressApplication.use(bodyParser.json());
        this._expressApplication.use(cors);
    }

    public get expressApplication(): express.Application {
        return this._expressApplication;
    }

    public listen(port: number): void {
        this._expressApplication.listen(port);
    }
}
