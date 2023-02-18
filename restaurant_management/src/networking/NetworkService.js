import { baseURL,header } from "./config";
import axios from "axios";

export class NetworkService {

    constructor()
    {
        this.client = axios.create({baseURL,header});
    }
    setAccessToken(token)
    {
        this.client.defaults.headers.common.authorization = `Bearer ${token}`;
    }

    clearAcessToken()
    {
        delete this.client.defaults.headers.common.authorization;
    }

    request ({method,url,data,...config})
    {
        return this.client.request({method,url,data,...config});
    }
    
}