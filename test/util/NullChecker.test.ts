import {NullChecker} from "../../src/util/NullChecker";
import {Developer} from "../../src/entity/person/Developer";
import {DeveloperNotFoundError} from "../../src/error/entity/DeveloperNotFoundError";

test("checkIfObjectIsUndefinedTest", () => {
    const nullChecker: NullChecker<Developer> = new NullChecker<Developer>();
    const developer: Developer = new Developer("abc", "cde");

    expect(
            nullChecker.checkIfObjectIsUndefined(developer, new DeveloperNotFoundError())
    ).toMatchObject(developer);
});

test("checkIfObjectIsUndefinedExceptionTest", () => {
    const nullChecker: NullChecker<Developer> = new NullChecker<Developer>();
    const developer = undefined;

    expect(() => {
        return nullChecker.checkIfObjectIsUndefined(developer, new DeveloperNotFoundError());
    }).toThrow(Error);
});
