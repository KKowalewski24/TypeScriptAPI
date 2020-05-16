import Person from "./Person";
import {Entity} from "typeorm";
import Developer from "./Developer";

@Entity()
export class Client extends Person {

    /*------------------------ FIELDS REGION ------------------------*/

    developer: Developer;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

export default Client;
