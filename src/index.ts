import Application from "./Application";
import Constants from "./constant/Constants";

const application: Application = new Application();
application.app.listen(Constants.PORT, () => {
    console.log("Server listening on http://localhost:3000")
});
