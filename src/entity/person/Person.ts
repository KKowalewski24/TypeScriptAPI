import {PrimaryEntity} from "../base/PrimaryEntity";
import {Column} from "typeorm";

export class Person extends PrimaryEntity {

    /*------------------------ FIELDS REGION ------------------------*/
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
