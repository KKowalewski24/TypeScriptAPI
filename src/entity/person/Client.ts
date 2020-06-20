import {Entity} from "typeorm";
import {Person} from "./Person";
import {Developer} from "./Developer";

@Entity()
export class Client extends Person {

    /*------------------------ FIELDS REGION ------------------------*/
    //TODO
    // @ManyToOne(
    //         type => Developer,
    //         developer => developer.clients,
    //         {
    //             onUpdate: "CASCADE",
    //             onDelete: "CASCADE"
    //         }
    // )
    developer: Developer;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}
