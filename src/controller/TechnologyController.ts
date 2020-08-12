import {JsonController} from "routing-controllers";
import {PATH_TECHNOLOGIES} from "../constant/path-constants";
import {TechnologyServiceImpl} from "../service/technology/TechnologyServiceImpl";
import {Get} from "routing-controllers/index";

@JsonController()
export class TechnologyController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyService: TechnologyServiceImpl = new TechnologyServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_TECHNOLOGIES)
    getAll() {
        return this._technologyService.findAll();
    }
}
