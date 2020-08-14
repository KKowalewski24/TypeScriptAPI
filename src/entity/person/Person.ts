import {PrimaryEntity} from "../base/PrimaryEntity";
import {Column} from "typeorm";

export abstract class Person extends PrimaryEntity {

    /*------------------------ FIELDS REGION ------------------------*/
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    /*------------------------ METHODS REGION ------------------------*/
    protected constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
