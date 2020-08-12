import {EntityRepository, Repository} from "typeorm/index";
import {Technology} from "../entity/technology/Technology";

@EntityRepository(Technology)
export class TechnologyRepository extends Repository<Technology> {

    /*------------------------ FIELDS REGION ------------------------*/

    /*------------------------ METHODS REGION ------------------------*/

}
