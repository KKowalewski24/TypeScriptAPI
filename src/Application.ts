import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _expressApplication: express.Application;

    /*------------------------ METHODS REGION ------------------------*/
    constructor() {
        useContainer(Container);

        this._expressApplication = createExpressServer({
            //TODO
            controllers: []
        });

        this._expressApplication.use(bodyParser.json());
        this._expressApplication.use(cors);
    }

    get expressApplication(): express.Application {
        return this._expressApplication;
    }

    public listen(port: number): void {
        this._expressApplication.listen(port);
    }
}
