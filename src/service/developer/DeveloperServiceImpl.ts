import {Repository} from "typeorm";
import {Developer} from "../../entity/person/Developer";
import {DeveloperService} from "./DeveloperService";

export class DeveloperServiceImpl implements DeveloperService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerRepository: Repository<Developer>;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(developerRepository: Repository<Developer>) {
        this._developerRepository = developerRepository;
    }
}
