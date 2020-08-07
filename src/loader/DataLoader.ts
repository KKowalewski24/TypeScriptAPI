import {Connection} from "typeorm";
import {Developer} from "../entity/person/Developer";
import {Technology} from "../entity/technology/Technology";
import {Client} from "../entity/person/Client";
import {ClientServiceImpl} from "../service/client/ClientServiceImpl";
import {DeveloperServiceImpl} from "../service/developer/DeveloperServiceImpl";
import {TechnologyServiceImpl} from "../service/technology/TechnologyServiceImpl";

export class DataLoader {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _connection: Connection;
    private readonly _clientService: ClientServiceImpl;
    private readonly _developerService: DeveloperServiceImpl;
    private readonly _technologyService: TechnologyServiceImpl;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(connection: Connection) {
        this._connection = connection;

        this._clientService = new ClientServiceImpl(
                this._connection.getRepository(Client));

        this._developerService = new DeveloperServiceImpl(
                this._connection.getRepository(Developer));

        this._technologyService = new TechnologyServiceImpl(
                this._connection.getRepository(Technology));
    }

    async loadData() {
        //TODO

        // const clientOne: Client = new Client("Artur", "Kowalewski");
        // const clientTwo: Client = new Client("Krzysztof", "Kowalewski");
        // const technology: Technology = new Technology("NodeJs", TechnologyType.BACK_END);
        // const developer: Developer = new Developer("Kamil", "Kowalewski");
        //
        // technology.developer = developer;
        // developer.clients = [clientOne, clientTwo];
        //
        // await this._technologyService.save(technology);
    }

    async removeData() {
        // await this._clientService.deleteAll();
        // await this._developerService.deleteAll();
        // await this._technologyService.deleteAll();
    }
}
