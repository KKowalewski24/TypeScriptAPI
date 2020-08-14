import "reflect-metadata";
import {connection} from "./connection/Connection";
import {Application} from "./Application";
import {
    PATH_API_DOCS, PATH_API_PREFIX, PATH_CLIENTS, PATH_DEVELOPERS, PATH_TECHNOLOGIES, PORT
} from "./constant/path-constants";

const printApiPaths = (): void => {
    console.log();
    console.log("PATH_API_DOCS: " + PATH_API_DOCS);
    console.log("PATH_API_PREFIX: " + PATH_API_PREFIX);
    console.log("PATH_CLIENTS: " + PATH_CLIENTS);
    console.log("PATH_DEVELOPERS: " + PATH_DEVELOPERS);
    console.log("PATH_TECHNOLOGIES: " + PATH_TECHNOLOGIES);
    console.log();
};
printApiPaths();

export const application: Application = new Application();

connection.then((conn) => {

    // const dataLoader: DataLoader = new DataLoader(conn);
    // dataLoader.loadData().catch(() => null);
    // dataLoader.updateData().catch(() => null);
    // dataLoader.removeData().catch(() => null);

    application.listen(PORT);

}).catch((error) => console.log(error));
