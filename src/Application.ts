import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import {createExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _application: express.Application;

    /*------------------------ METHODS REGION ------------------------*/
    constructor() {
        useContainer(Container);

        this._application = createExpressServer({
            //TODO
            controllers: []
        });

        this._application.use(bodyParser.json());
        this._application.use(cors);
    }

    get application(): express.Application {
        return this._application;
    }

    public listen(port: number): void {
        this._application.listen(port);
    }
}
