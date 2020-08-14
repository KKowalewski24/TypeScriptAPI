import {JsonController} from "routing-controllers";
import {Body, Get, Param, Post, Put} from "routing-controllers/index";
import {PATH_CLIENTS, PATH_CLIENTS_PARAM_ID} from "../constant/path-constants";
import {ClientServiceImpl} from "../service/client/ClientServiceImpl";
import {BaseController} from "./BaseController";
import {Client} from "../entity/person/Client";

@JsonController()
export class ClientController implements BaseController<Client> {

    /*------------------------ FIELDS REGION ------------------------*/
    private readonly _clientService: ClientServiceImpl = new ClientServiceImpl();

    /*------------------------ METHODS REGION ------------------------*/
    @Get(PATH_CLIENTS)
    getAll(): Promise<Client[]> {
        return this._clientService.findAll();
    }

    @Get(PATH_CLIENTS_PARAM_ID)
    getById(@Param("id") id: number): Promise<Client> {
        return this._clientService.findById(id);
    }

    @Post(PATH_CLIENTS)
    post(@Body() object: Client): Promise<Client> {
        return this._clientService.save(object);
    }

    @Put(PATH_CLIENTS_PARAM_ID)
    put(@Param("id") id: number, @Body() object: Client): Promise<Client> {
        return this._clientService.update(object);
    }
}
