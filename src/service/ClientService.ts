import {Repository} from "typeorm";
import {Client} from "../entity/person/Client";

export class ClientService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientRepository: Repository<Client>;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(clientRepository: Repository<Client>) {
        this._clientRepository = clientRepository;
    }
}
