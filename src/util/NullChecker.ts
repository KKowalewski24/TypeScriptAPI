export class NullChecker<T> {

    /*------------------------ FIELDS REGION ------------------------*/

    /*------------------------ METHODS REGION ------------------------*/
    public checkIfObjectIsUndefined(object: T | undefined, error: Error): T {
        if (!object) {
            throw error;
        } else {
            return object;
        }
    }

    public checkIfArrayIsUndefined(object: T[] | undefined, error: Error): T[] {
        if (!object) {
            throw error;
        } else {
            return object;
        }
    }
}
