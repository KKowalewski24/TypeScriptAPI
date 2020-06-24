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

    // TODO
    // public async deleteAll(): Promise<void> {
    //     await this._developerRepository.clear();
    // }
    //
    // public async deleteById(id: number): Promise<Developer> {
    //     const developer: Developer = await this.findById(id);
    //     const deletedDeveloper: Developer = await this.delete(developer);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             deletedDeveloper, new DeveloperNotFoundError);
    // }
    //
    // public async delete(object: Developer): Promise<Developer> {
    //     const developer: Developer = await this._developerRepository.remove(object);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             developer, new DeveloperNotFoundError());
    // }
    //
    // public async findAll(): Promise<Developer[]> {
    //     const developers: Developer[] = await this._developerRepository.find();
    //
    //     return this._nullChecker.checkIfArrayIsUndefined(
    //             developers, new DeveloperNotFoundError());
    // }
    //
    // public async findById(id: number): Promise<Developer> {
    //     const developer: Developer | undefined = await this._developerRepository.findOne(id);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             developer, new DeveloperNotFoundError());
    // }
    //
    // public async findByObject(object: Developer): Promise<Developer> {
    //     const developer: Developer | undefined = await this._developerRepository.findOne(object);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             developer, new DeveloperNotFoundError());
    // }
    //
    // public async save(object: Developer): Promise<Developer> {
    //     return await this._developerRepository.save(object);
    // }
    //
    // public async update(object: Developer): Promise<Developer> {
    // await this._developerRepository.update(object);
    // return undefined;
    //    TODO
    // return object;
    // }
}
