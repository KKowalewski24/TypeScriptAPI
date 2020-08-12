import {JsonController} from "routing-controllers";
import {Get, Param} from "routing-controllers/index";
import {PATH_CLIENTS, PATH_CLIENTS_PARAM_ID} from "../constant/path-constants";
import {ClientServiceImpl} from "../service/client/ClientServiceImpl";

@JsonController()
export class ClientController {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientService: ClientServiceImpl = new ClientServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_CLIENTS)
    getAll() {
        return this._clientService.findAll();
    }

    @Get(PATH_CLIENTS_PARAM_ID)
    getById(@Param("id") id: number) {
        return this._clientService.findById(id);
    }
}
