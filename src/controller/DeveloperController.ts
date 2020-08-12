import {JsonController} from "routing-controllers";
import {PATH_DEVELOPERS, PATH_DEVELOPERS_PARAM_ID} from "../constant/path-constants";
import {DeveloperServiceImpl} from "../service/developer/DeveloperServiceImpl";
import {Get, Param} from "routing-controllers/index";
import {BaseController} from "./BaseController";
import {Developer} from "../entity/person/Developer";

@JsonController()
export class DeveloperController implements BaseController<Developer> {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerService: DeveloperServiceImpl = new DeveloperServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_DEVELOPERS)
    getAll(): Promise<Developer[]> {
        return this._developerService.findAll();
    }

    @Get(PATH_DEVELOPERS_PARAM_ID)
    getById(@Param("id") id: number): Promise<Developer> {
        return this._developerService.findById(id);
    }
}
