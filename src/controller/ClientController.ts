import {JsonController} from "routing-controllers";
import {PATH_CLIENT} from "../constant/Constants";
import {ClientServiceImpl} from "../service/client/ClientServiceImpl";

@JsonController(PATH_CLIENT)
export class ClientController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientService: ClientServiceImpl;

    /*------------------------ METHODS REGION ------------------------*/
    public constructor(clientService: ClientServiceImpl) {
        this._clientService = clientService;
    }
}
