import {Repository} from "typeorm";
import {Technology} from "../../entity/technology/Technology";
import {TechnologyService} from "./TechnologyService";

export class TechnologyServiceImpl implements TechnologyService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _technologyRepository: Repository<Technology>;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(technologyRepository: Repository<Technology>) {
        this._technologyRepository = technologyRepository;
    }
}
