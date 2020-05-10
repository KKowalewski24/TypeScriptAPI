import {BaseEntity, PrimaryGeneratedColumn} from "typeorm";

export class PrimaryEntity extends BaseEntity {

    /*------------------------ FIELDS REGION ------------------------*/
    @PrimaryGeneratedColumn()
    id: number;

    /*------------------------ METHODS REGION ------------------------*/

}

export default PrimaryEntity;
    