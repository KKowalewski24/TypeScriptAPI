import {EntityRepository, Repository} from "typeorm/index";
import {Client} from "../entity/person/Client";

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {

    /*------------------------ FIELDS REGION ------------------------*/

    /*------------------------ METHODS REGION ------------------------*/

}
