import {JsonController} from "routing-controllers";
import {PATH_DEVELOPERS} from "../constant/path-constants";
import {DeveloperServiceImpl} from "../service/developer/DeveloperServiceImpl";
import {Get} from "routing-controllers/index";

@JsonController()
export class DeveloperController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerService: DeveloperServiceImpl = new DeveloperServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_DEVELOPERS)
    getAll() {
        return this._developerService.findAll();
    }
}
