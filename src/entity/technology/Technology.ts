import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import PrimaryEntity from "../base/PrimaryEntity";
import TechnologyType from "./TechnologyType";
import Developer from "../person/Developer";

@Entity()
export class Technology extends PrimaryEntity {

    /*------------------------ FIELDS REGION ------------------------*/
    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: [TechnologyType.BACK_END, TechnologyType.FRONT_END]
    })
    technologyType: TechnologyType;

    @OneToOne(
            type => Developer,
            developer => developer.technology,
            {cascade: true}
    )
    developer: Developer;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(name: string, technologyType: TechnologyType) {
        super();
        this.name = name;
        this.technologyType = technologyType;
    }
}

export default Technology;
    