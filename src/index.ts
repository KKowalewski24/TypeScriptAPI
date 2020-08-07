import "reflect-metadata";
import {connection} from "./connection/Connection";
import {DataLoader} from "./loader/DataLoader";
import {Application} from "./Application";
import {
    PATH_API_DOCS, PATH_API_PREFIX, PATH_CLIENT, PATH_DEVELOPER, PATH_TECHNOLOGY, PORT
} from "./constant/path-constants";

const printApiPaths = (): void => {
    console.log();
    console.log("PATH_API_DOCS: " + PATH_API_DOCS);
    console.log("PATH_API_PREFIX: " + PATH_API_PREFIX);
    console.log("PATH_CLIENT: " + PATH_CLIENT);
    console.log("PATH_DEVELOPER: " + PATH_DEVELOPER);
    console.log("PATH_TECHNOLOGY: " + PATH_TECHNOLOGY);
    console.log();
};
printApiPaths();

export const application: Application = new Application();

connection.then((conn) => {

    const dataLoader: DataLoader = new DataLoader(conn);
    // dataLoader.loadData().catch(() => null);
    // dataLoader.removeData().catch(() => null);

    application.listen(PORT);

}).catch((error) => console.log(error));
