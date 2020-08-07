import {Repository} from "typeorm";
import {Client} from "../../entity/person/Client";
import {ClientService} from "./ClientService";
import {NullChecker} from "../../util/NullChecker";
import {ClientNotFoundError} from "../../error/entity/ClientNotFoundError";

export class ClientServiceImpl implements ClientService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientRepository: Repository<Client>;
    private readonly _nullChecker: NullChecker<Client> = new NullChecker<Client>();

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(clientRepository: Repository<Client>) {
        this._clientRepository = clientRepository;
    }
}
