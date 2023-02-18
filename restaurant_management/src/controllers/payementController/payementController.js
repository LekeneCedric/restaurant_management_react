import { NetworkService } from "../../networking/NetworkService";
import { routes } from "../../networking/routes";


const networkService = new NetworkService();

export const PayementController = { 
    payer : (data)=>{
        return networkService.request({
            method:'POST',
            url:`${routes.payemenet.payer}`,
            data
        })
    }
}