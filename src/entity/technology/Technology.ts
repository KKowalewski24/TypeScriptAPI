import {Column, Entity} from "typeorm";
import PrimaryEntity from "../base/PrimaryEntity";
import TechnologyType from "./TechnologyType";

@Entity()
export class Technology extends PrimaryEntity {

    /*------------------------ FIELDS REGION ------------------------*/
    @Column()
    name: string;

    @Column()
    technologyType: TechnologyType;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(name: string, technologyType: TechnologyType) {
        super();
        this.name = name;
        this.technologyType = technologyType;
    }
}

export default Technology;
    