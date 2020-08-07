import {Repository} from "typeorm";
import {Developer} from "../../entity/person/Developer";
import {DeveloperService} from "./DeveloperService";
import {DeveloperNotFoundError} from "../../error/entity/DeveloperNotFoundError";
import {NullChecker} from "../../util/NullChecker";

export class DeveloperServiceImpl implements DeveloperService {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _developerRepository: Repository<Developer>;
    private readonly _nullChecker: NullChecker<Developer> = new NullChecker<Developer>();

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(developerRepository: Repository<Developer>) {
        this._developerRepository = developerRepository;
    }
}
