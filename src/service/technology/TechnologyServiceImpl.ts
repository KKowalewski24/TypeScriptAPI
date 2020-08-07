import {Repository} from "typeorm";
import {Technology} from "../../entity/technology/Technology";
import {TechnologyService} from "./TechnologyService";
import {NullChecker} from "../../util/NullChecker";
import {TechnologyNotFoundError} from "../../error/entity/TechnologyNotFoundError";

export class TechnologyServiceImpl implements TechnologyService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyRepository: Repository<Technology>;
    private readonly _nullChecker: NullChecker<Technology> = new NullChecker<Technology>();

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(technologyRepository: Repository<Technology>) {
        this._technologyRepository = technologyRepository;
    }
}
