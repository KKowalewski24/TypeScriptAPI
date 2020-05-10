import express from "express"
import bodyParser from "body-parser";
import cors from "cors";

export class Application {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _app: express.Application;
    //TODO CONFIGURE ROUTES

    /*------------------------ METHODS REGION ------------------------*/
    constructor() {
        this._app = express();
        this._app.use(bodyParser.json());
        this._app.use(cors());

    }

    get app(): express.Application {
        return this._app;
    }
}

export default Application;
    