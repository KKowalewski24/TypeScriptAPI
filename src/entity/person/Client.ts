import {Entity} from "typeorm";
import {ManyToOne} from "typeorm/index";
import {Person} from "./Person";
import {Developer} from "./Developer";

@Entity()
export class Client extends Person {

    /*------------------------ FIELDS REGION ------------------------*/
    @ManyToOne(
            type => Developer,
            developer => developer.clients
    )
    developer: Developer;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}
