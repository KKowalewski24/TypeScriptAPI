import {JsonController} from "routing-controllers";
import {PATH_DEVELOPER} from "../constant/path-constants";
import {DeveloperServiceImpl} from "../service/developer/DeveloperServiceImpl";

@JsonController(PATH_DEVELOPER)
export class DeveloperController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerService: DeveloperServiceImpl;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(developerService: DeveloperServiceImpl) {
        this._developerService = developerService;
    }
}
