import {Developer} from "../../entity/person/Developer";
import {DeveloperService} from "./DeveloperService";
import {NullChecker} from "../../util/NullChecker";

export class DeveloperServiceImpl implements DeveloperService {

    /*------------------------ FIELDS REGION ------------------------*/

    private readonly _nullChecker: NullChecker<Developer> = new NullChecker<Developer>();

    /*------------------------ METHODS REGION ------------------------*/

}
