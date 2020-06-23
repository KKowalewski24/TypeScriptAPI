import {Connection, Repository} from "typeorm";
import {Developer} from "../entity/person/Developer";
import {Technology} from "../entity/technology/Technology";
import {Client} from "../entity/person/Client";
import {TechnologyType} from "../entity/technology/TechnologyType";

export class DataLoader {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _connection: Connection;
    private readonly _developerRepository: Repository<Developer>;
    private readonly _technologyRepository: Repository<Technology>;
    private readonly _clientRepository: Repository<Client>;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(connection: Connection) {
        this._connection = connection;
        this._developerRepository = this._connection.getRepository(Developer);
        this._technologyRepository = this._connection.getRepository(Technology);
        this._clientRepository = this._connection.getRepository(Client);
    }

    async loadData() {
        const clientOne: Client = new Client("Artur", "Kowalewski");
        const clientTwo: Client = new Client("Krzysztof", "Kowalewski");
        const technology: Technology = new Technology("NodeJs", TechnologyType.BACK_END);
        const developer: Developer = new Developer("Kamil", "Kowalewski");

        technology.developer = developer;
        developer.clients = [clientOne, clientTwo];

        await this._technologyRepository.save(technology);
        console.log(await this._developerRepository.findOne(8));
    }

    async removeData() {
        // await this._clientRepository.clear();
        await this._developerRepository.clear();
        await this._technologyRepository.clear();
    }
}
