import { NetworkService } from "../../networking/NetworkService";
import { routes } from "../../networking/routes";


const networkService = new NetworkService();

export const PlatController = {
    getPlats : ()=>{
        return networkService.request({
            method:'GET',
            url:`${routes.plats.get}`
        })
    },
    createPlats : (data)=>{
        return networkService.request({
            method:'POST',
            url:`${routes.plats.create}`,
            data
        })
    }
}