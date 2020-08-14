import {Connection} from "typeorm";
import {Developer} from "../entity/person/Developer";
import {Technology} from "../entity/technology/Technology";
import {Client} from "../entity/person/Client";
import {ClientServiceImpl} from "../service/client/ClientServiceImpl";
import {DeveloperServiceImpl} from "../service/developer/DeveloperServiceImpl";
import {TechnologyServiceImpl} from "../service/technology/TechnologyServiceImpl";
import {TechnologyType} from "../entity/technology/TechnologyType";

export class DataLoader {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _connection: Connection;
    private readonly _clientService: ClientServiceImpl = new ClientServiceImpl();
    private readonly _developerService: DeveloperServiceImpl = new DeveloperServiceImpl();
    private readonly _technologyService: TechnologyServiceImpl = new TechnologyServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    constructor(connection: Connection) {
        this._connection = connection;
    }

    async loadData() {
        const clientOne: Client = new Client("Artur", "Kowalewski");
        const clientTwo: Client = new Client("Krzysztof", "Kowalewski");
        const technology: Technology = new Technology("NodeJs", TechnologyType.BACK_END);
        const developer: Developer = new Developer("Kamil", "Kowalewski");

        technology.developer = developer;
        developer.technology = technology;

        developer.clients = [clientOne, clientTwo];
        clientOne.developer = developer;
        clientTwo.developer = developer;

        await this._technologyService.save(technology);
        await this._developerService.save(developer);
        await this._clientService.save(clientOne);
        await this._clientService.save(clientTwo);
    }

    async removeData() {

    }
}
