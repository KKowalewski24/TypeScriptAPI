import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import {useExpressServer, useContainer} from "routing-controllers";
import {Container} from "typedi";

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _expressApp: express.Application;
    private readonly _application: express.Application;

    /*------------------------ METHODS REGION ------------------------*/
    constructor() {
        useContainer(Container);

        this._expressApp = express();
        this._expressApp.use(bodyParser.json());
        this._expressApp.use(cors());

        this._application = useExpressServer(this._expressApp, {
            //TODO
            controllers: []
        });
    }

    get application(): express.Application {
        return this._application;
    }

    public listen(port: number): void {
        this._application.listen(port);
    }
}
