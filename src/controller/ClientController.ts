import {JsonController} from "routing-controllers";
import {Get} from "routing-controllers/index";
import {PATH_CLIENT} from "../constant/path-constants";
import {ClientServiceImpl} from "../service/client/ClientServiceImpl";

@JsonController()
export class ClientController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientService: ClientServiceImpl = new ClientServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_CLIENT)
    getAll() {
        return this._clientService.findAll();
    }
}
