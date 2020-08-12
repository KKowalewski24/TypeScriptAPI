import {JsonController} from "routing-controllers";
import {PATH_TECHNOLOGY} from "../constant/path-constants";
import {TechnologyServiceImpl} from "../service/technology/TechnologyServiceImpl";
import {Get} from "routing-controllers/index";

@JsonController()
export class TechnologyController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyService: TechnologyServiceImpl = new TechnologyServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_TECHNOLOGY)
    getAll() {
        return this._technologyService.findAll();
    }
}
