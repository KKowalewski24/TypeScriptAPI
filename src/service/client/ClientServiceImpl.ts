import {ClientRepository} from "../../repository/ClientRepository";
import {getCustomRepository} from "typeorm/index";
import {Client} from "../../entity/person/Client";
import {ClientService} from "./ClientService";
import {NullChecker} from "../../util/NullChecker";

export class ClientServiceImpl implements ClientService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientRepository: ClientRepository = getCustomRepository(ClientRepository);
    private readonly _nullChecker: NullChecker<Client> = new NullChecker<Client>();

    /*------------------------ METHODS REGION ------------------------*/
    async findAll(): Promise<Client[]> {
        return await this._clientRepository.find();
    }

    async findById(id: number): Promise<Client> {
        return await this._clientRepository.findOneOrFail(id);
    }

    async save(object: Client): Promise<Client> {
        return await this._clientRepository.save(object);
    }
}
