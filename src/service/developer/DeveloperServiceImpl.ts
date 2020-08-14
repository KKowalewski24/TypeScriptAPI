import {Developer} from "../../entity/person/Developer";
import {DeveloperService} from "./DeveloperService";
import {DeveloperRepository} from "../../repository/DeveloperRepository";
import {getCustomRepository} from "typeorm/index";

export class DeveloperServiceImpl implements DeveloperService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerRepository: DeveloperRepository
            = getCustomRepository(DeveloperRepository);

    /*------------------------ METHODS REGION ------------------------*/
    async findAll(): Promise<Developer[]> {
        return await this._developerRepository.find();
    }

    async findById(id: number): Promise<Developer> {
        return await this._developerRepository.findOneOrFail(id);
    }

    async save(object: Developer): Promise<Developer> {
        return await this._developerRepository.save(object);
    }

    async update(object: Developer): Promise<Developer> {
        return await this._developerRepository.save(object);
    }
}
