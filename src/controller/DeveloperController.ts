import {JsonController} from "routing-controllers";
import {PATH_DEVELOPER} from "../constant/Constants";
import {DeveloperService} from "../service/DeveloperService";

@JsonController(PATH_DEVELOPER)
export class DeveloperController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerService: DeveloperService;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(developerService: DeveloperService) {
        this._developerService = developerService;
    }
}
