import {EntityRepository, Repository} from "typeorm/index";
import {Developer} from "../entity/person/Developer";

@EntityRepository(Developer)
export class DeveloperRepository extends Repository<Developer> {

    /*------------------------ FIELDS REGION ------------------------*/

    /*------------------------ METHODS REGION ------------------------*/

}
