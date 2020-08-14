export class NullChecker<T> {

    /*------------------------ FIELDS REGION ------------------------*/

    /*------------------------ METHODS REGION ------------------------*/
    checkIfObjectIsUndefined(object: T | undefined, error: Error): T {
        if (!object) {
            throw error;
        } else {
            return object;
        }
    }

    checkIfArrayIsUndefined(object: T[] | undefined, error: Error): T[] {
        if (!object) {
            throw error;
        } else {
            return object;
        }
    }
}
