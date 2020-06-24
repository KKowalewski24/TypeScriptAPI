import {Entity, JoinColumn, OneToOne} from "typeorm";
import {Person} from "./Person";
import {Technology} from "../technology/Technology";
import {Client} from "./Client";

@Entity()
export class Developer extends Person {

    /*------------------------ FIELDS REGION ------------------------*/
    //TODO
    @OneToOne(
            type => Technology,
            technology => technology.developer,
            {
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            }
    )
    @JoinColumn()
    technology: Technology;

    //TODO
    // @OneToMany(
    //         type => Client,
    //         client => client.developer,
    //         {
    //             onUpdate: "CASCADE",
    //             onDelete: "CASCADE"
    //         }
    // )
    clients: Client[];

    /*------------------------ METHODS REGION ------------------------*/
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}
