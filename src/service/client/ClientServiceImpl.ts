import {Repository} from "typeorm";
import {Client} from "../../entity/person/Client";
import {ClientService} from "./ClientService";

export class ClientServiceImpl implements ClientService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientRepository: Repository<Client>;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(clientRepository: Repository<Client>) {
        this._clientRepository = clientRepository;
    }
}
