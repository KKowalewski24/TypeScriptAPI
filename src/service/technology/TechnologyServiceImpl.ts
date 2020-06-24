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

    // TODO
    // public async deleteAll(): Promise<void> {
    //     await this._technologyRepository.clear();
    // }
    //
    // public async deleteById(id: number): Promise<Technology> {
    //     const technology: Technology = await this.findById(id);
    //     const deletedTechnology: Technology = await this.delete(technology);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             deletedTechnology, new TechnologyNotFoundError());
    // }
    //
    // public async delete(object: Technology): Promise<Technology> {
    //     const technology: Technology = await this._technologyRepository.remove(object);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             technology, new TechnologyNotFoundError());
    // }
    //
    // public async findAll(): Promise<Technology[]> {
    //     const technologies: Technology[] = await this._technologyRepository.find();
    //
    //     return technologies;
    //     // return this._nullChecker.checkIfArrayIsUndefined(
    //     //         technologies, new TechnologyNotFoundError());
    // }
    //
    // public async findById(id: number): Promise<Technology> {
    //     const technology: Technology | undefined = await this._technologyRepository.findOne(id);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             technology, new TechnologyNotFoundError());
    // }
    //
    // public async findByObject(object: Technology): Promise<Technology> {
    //     const technology: Technology | undefined = await this._technologyRepository.findOne(object);
    //
    //     return this._nullChecker.checkIfObjectIsUndefined(
    //             technology, new TechnologyNotFoundError());
    // }
    //
    // public async save(object: Technology): Promise<Technology> {
    //     return await this._technologyRepository.save(object);
    // }
    //
    // public async update(object: Technology): Promise<Technology> {
    //     // await this._technologyRepository.update(object);
    //     // return undefined;
    //     //    TODO
    //     return object;
    // }
}
