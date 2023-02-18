import { NetworkService } from "../../networking/NetworkService";
import { routes } from "../../networking/routes";

const networkService = new NetworkService();

export const CommandeController = {
    getClientCommande : (id)=>{
        return networkService.request({
            method:'GET',
            url:`${routes.commande.getByClient}/${id}`
        })
    },
    createCommande : (data)=>{
        return networkService.request({
            method:'POST',
            url:`${routes.commande.create}`,
            data
        })
    },
    updateCommande : (id,data)=>{
        return networkService.request({
            method : 'PUT',
            url : `${routes.commande.update}/${id}`,
            data
        })
    }
}