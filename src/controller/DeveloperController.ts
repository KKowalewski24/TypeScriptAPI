import {JsonController} from "routing-controllers";
import {PATH_DEVELOPERS, PATH_DEVELOPERS_PARAM_ID} from "../constant/path-constants";
import {DeveloperServiceImpl} from "../service/developer/DeveloperServiceImpl";
import {Get, Param} from "routing-controllers/index";

@JsonController()
export class DeveloperController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerService: DeveloperServiceImpl = new DeveloperServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_DEVELOPERS)
    getAll() {
        return this._developerService.findAll();
    }

    @Get(PATH_DEVELOPERS_PARAM_ID)
    getById(@Param("id") id: number) {
        return this._developerService.findById(id);
    }
}
