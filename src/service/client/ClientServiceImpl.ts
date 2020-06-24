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

    // TODO
    // public async deleteAll(): Promise<void> {
    //     await this._clientRepository.clear();
    // }
    //
    // public async deleteById(id: number): Promise<Client> {
    //     const client: Client = await this.findById(id);
    //     const deletedClient: Client = await this.delete(client);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             deletedClient, new ClientNotFoundError());
    // }
    //
    // public async delete(object: Client): Promise<Client> {
    //     const client: Client = await this._clientRepository.remove(object);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             client, new ClientNotFoundError());
    // }
    //
    // public async findAll(): Promise<Client[]> {
    //     const clients: Client[] = await this._clientRepository.find();
    //
    //     return this._nullChecker.checkIfArrayIsUndefined(
    //             clients, new ClientNotFoundError());
    // }
    //
    // public async findById(id: number): Promise<Client> {
    //     const client: Client | undefined = await this._clientRepository.findOne(id);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             client, new ClientNotFoundError());
    // }
    //
    // public async findByObject(object: Client): Promise<Client> {
    //     const client: Client | undefined = await this._clientRepository.findOne(object);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             client, new ClientNotFoundError());
    // }
    //
    // public async save(object: Client): Promise<Client> {
    //     return await this._clientRepository.save(object);
    // }
    //
    // public async update(object: Client): Promise<Client> {
    //     // await this._clientRepository.update(object);
    //     // return undefined;
    //     //    TODO
    //     return object;
    // }
}
