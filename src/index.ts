import "reflect-metadata"
import Application from "./Application";
import Constants from "./constant/Constants";
import connection from "./connection/Connection";
import DataLoader from "./loader/DataLoader";

connection.then(async (conn) => {

    const dataLoader: DataLoader = new DataLoader(conn);
    // await dataLoader.loadData();
    // await dataLoader.removeData();

    new Application().app.listen(Constants.PORT, () => {
        console.log("Server listening on http://localhost:3000")
    });

}).catch((error) => console.log(error));
