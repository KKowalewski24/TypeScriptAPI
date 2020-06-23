import {JsonController} from "routing-controllers";
import {PATH_TECHNOLOGY} from "../constant/Constants";
import {TechnologyService} from "../service/TechnologyService";

@JsonController(PATH_TECHNOLOGY)
export class TechnologyController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyService: TechnologyService;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(technologyService: TechnologyService) {
        this._technologyService = technologyService;
    }
}
