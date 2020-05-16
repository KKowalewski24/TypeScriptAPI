import Technology from "../entity/technology/Technology";
import TechnologyType from "../entity/technology/TechnologyType";
import Developer from "../entity/person/Developer";
import {Connection, Repository} from "typeorm";

export class DataLoader {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _connection: Connection;
    private readonly _developerRepository: Repository<Developer>;
    private readonly _technologyRepository: Repository<Technology>;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(connection: Connection) {
        this._connection = connection;
        this._developerRepository = this._connection.getRepository(Developer);
        this._technologyRepository = this._connection.getRepository(Technology);
    }

    async loadData() {
        const technology: Technology = new Technology("NodeJs", TechnologyType.BACK_END);
        const developer: Developer = new Developer("Kamil", "Kowalewski");
        technology.developer = developer;

        await this._technologyRepository.save(technology);
        console.log(await this._developerRepository.findOne(8));
    }

    async removeData() {
        await this._developerRepository.clear();
    }
}

export default DataLoader;
