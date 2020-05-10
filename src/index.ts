import Application from "./Application";
import Constants from "./constant/Constants";
import connection from "./connection/Connection";

connection.then(async (it) => {
    new Application().app.listen(Constants.PORT, () => {
        console.log("Server listening on http://localhost:3000")
    });
}).catch((error) => console.log(error));
