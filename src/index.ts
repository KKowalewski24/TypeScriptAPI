import "reflect-metadata";
import {connection} from "./connection/Connection";
import DataLoader from "./loader/DataLoader";
import {Application} from "./Application";
import {PORT} from "./constant/Constants";

export const application: Application = new Application();

connection.then(async (conn) => {

    const dataLoader: DataLoader = new DataLoader(conn);
    // await dataLoader.loadData();
    // await dataLoader.removeData();

    application.listen(PORT);

}).catch((error) => console.log(error));
