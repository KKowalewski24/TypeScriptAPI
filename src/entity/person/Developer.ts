import {OneToMany} from "typeorm/index";
import {Entity, JoinColumn, OneToOne} from "typeorm";
import {Person} from "./Person";
import {Technology} from "../technology/Technology";
import {Client} from "./Client";

@Entity()
export class Developer extends Person {

    /*------------------------ FIELDS REGION ------------------------*/
    @OneToOne(
            type => Technology,
            technology => technology.developer
    )
    @JoinColumn()
    technology: Technology;

    @OneToMany(
            type => Client,
            client => client.developer
    )
    clients: Client[];

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}
