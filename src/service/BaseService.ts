export interface BaseService<T> {

    // TODO
    findById(id: number): Promise<T>;

    findAll(): Promise<T[]>;

    // update(object: T): Promise<T>;

    save(object: T): Promise<T>;

    // deleteById(id: number): Promise<T>;
    //
    // delete(object: T): Promise<T>;
    //
    // deleteAll(): Promise<void>;
}
