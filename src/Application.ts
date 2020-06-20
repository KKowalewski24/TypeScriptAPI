import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import {useExpressServer} from "routing-controllers";

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _expressApp: express.Application;
    private readonly _application: express.Application;

    /*------------------------ METHODS REGION ------------------------*/
    constructor() {
        this._expressApp = express();
        this._expressApp.use(bodyParser.json());
        this._expressApp.use(cors());
        this._application = useExpressServer(this._expressApp, {
            //TODO
            controllers: []
        });
    }

    public listen(port: number) {
        this._application.listen(port);
    }

    get application(): express.Application {
        return this._application;
    }
}
