import {Developer} from "../../entity/person/Developer";
import {DeveloperService} from "./DeveloperService";
import {NullChecker} from "../../util/NullChecker";
import {DeveloperRepository} from "../../repository/DeveloperRepository";
import {getCustomRepository} from "typeorm/index";

export class DeveloperServiceImpl implements DeveloperService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerRepository: DeveloperRepository
            = getCustomRepository(DeveloperRepository);
    private readonly _nullChecker: NullChecker<Developer> = new NullChecker<Developer>();

    /*------------------------ METHODS REGION ------------------------*/
    async findAll(): Promise<Developer[]> {
        return await this._developerRepository.find();
    }

    async findById(id: number): Promise<Developer> {
        return await this._developerRepository.findOneOrFail(id);
    }
}
