import {JsonController} from "routing-controllers";
import {PATH_TECHNOLOGY} from "../constant/path-constants";
import {TechnologyServiceImpl} from "../service/technology/TechnologyServiceImpl";

@JsonController(PATH_TECHNOLOGY)
export class TechnologyController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyService: TechnologyServiceImpl;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(technologyService: TechnologyServiceImpl) {
        this._technologyService = technologyService;
    }
}
