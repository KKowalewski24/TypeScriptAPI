export interface BaseService<T> {

    findAll(): Promise<T[]>;

    findById(id: number): Promise<T>;

    save(object: T): Promise<T>;

    update(object: T): Promise<T>;

    // deleteById(id: number): Promise<T>;

    // delete(object: T): Promise<T>;

    // deleteAll(): Promise<void>;
}
