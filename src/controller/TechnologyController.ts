import {JsonController} from "routing-controllers";
import {PATH_TECHNOLOGIES, PATH_TECHNOLOGIES_PARAM_ID} from "../constant/path-constants";
import {TechnologyServiceImpl} from "../service/technology/TechnologyServiceImpl";
import {Get, Param} from "routing-controllers/index";
import {BaseController} from "./BaseController";
import {Technology} from "../entity/technology/Technology";

@JsonController()
export class TechnologyController implements BaseController<Technology> {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyService: TechnologyServiceImpl = new TechnologyServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_TECHNOLOGIES)
    getAll(): Promise<Technology[]> {
        return this._technologyService.findAll();
    }

    @Get(PATH_TECHNOLOGIES_PARAM_ID)
    getById(@Param("id") id: number): Promise<Technology> {
        return this._technologyService.findById(id);
    }
}
