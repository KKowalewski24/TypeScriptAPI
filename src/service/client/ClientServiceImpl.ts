import {Client} from "../../entity/person/Client";
import {ClientService} from "./ClientService";
import {NullChecker} from "../../util/NullChecker";

export class ClientServiceImpl implements ClientService {

    /*------------------------ FIELDS REGION ------------------------*/

    private readonly _nullChecker: NullChecker<Client> = new NullChecker<Client>();

    /*------------------------ METHODS REGION ------------------------*/

}
