import {BaseEntity, PrimaryGeneratedColumn} from "typeorm";

export abstract class PrimaryEntity extends BaseEntity {

    /*------------------------ FIELDS REGION ------------------------*/
    @PrimaryGeneratedColumn()
    id: number;

    /*------------------------ METHODS REGION ------------------------*/
    protected constructor() {
        super();
    }
}
