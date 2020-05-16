import Person from "./Person";
import {Entity, JoinColumn, OneToOne} from "typeorm";
import Technology from "../technology/Technology";

@Entity()
export class Developer extends Person {

    /*------------------------ FIELDS REGION ------------------------*/
    @OneToOne(
            type => Technology,
            technology => technology.developer,
    )
    @JoinColumn()
    technology: Technology;

    clients: Developer[];

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

export default Developer;
