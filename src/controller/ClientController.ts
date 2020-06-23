import {JsonController} from "routing-controllers";
import {PATH_CLIENT} from "../constant/Constants";
import {ClientService} from "../service/ClientService";

@JsonController(PATH_CLIENT)
export class ClientController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly clientService: ClientService;

    /*------------------------ METHODS REGION ------------------------*/
    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }
}
