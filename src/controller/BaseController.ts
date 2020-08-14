export interface BaseController<T> {

    getAll(): Promise<T[]>;

    getById(id: number): Promise<T>;

    post(object: T): Promise<T>;

    put(id: number, object: T): Promise<T>;
}
