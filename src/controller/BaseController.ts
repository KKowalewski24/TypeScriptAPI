export interface BaseController<T> {

    getAll(): Promise<T[]>;

    getById(id: number): Promise<T>;
}
