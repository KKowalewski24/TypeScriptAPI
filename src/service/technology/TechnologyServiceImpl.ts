import {Technology} from "../../entity/technology/Technology";
import {TechnologyService} from "./TechnologyService";
import {NullChecker} from "../../util/NullChecker";
import {TechnologyRepository} from "../../repository/TechnologyRepository";
import {getCustomRepository} from "typeorm/index";

export class TechnologyServiceImpl implements TechnologyService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyRepository: TechnologyRepository
            = getCustomRepository(TechnologyRepository);
    private readonly _nullChecker: NullChecker<Technology> = new NullChecker<Technology>();

    /*------------------------ METHODS REGION ------------------------*/
    async findAll(): Promise<Technology[]> {
        return await this._technologyRepository.find();
    }

    async findById(id: number): Promise<Technology> {
        return await this._technologyRepository.findOneOrFail(id);
    }

    async save(object: Technology): Promise<Technology> {
        return await this._technologyRepository.save(object);
    }

    async update(object: Technology): Promise<Technology> {
        return await this._technologyRepository.save(object);
    }
}
