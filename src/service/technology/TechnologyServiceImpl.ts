import {Technology} from "../../entity/technology/Technology";
import {TechnologyService} from "./TechnologyService";
import {NullChecker} from "../../util/NullChecker";

export class TechnologyServiceImpl implements TechnologyService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _nullChecker: NullChecker<Technology> = new NullChecker<Technology>();

    /*------------------------ METHODS REGION ------------------------*/

}
