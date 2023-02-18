import { NetworkService } from "../../networking/NetworkService";
import { routes } from "../../networking/routes";


const networkService = new NetworkService();

export const MenusController = {
    getMenus : ()=>{
        return networkService.request({
            method:'GET',
            url:`${routes.menus.get}`
        })
    },
    createMenus : (data)=>{
        return networkService.request({
            method:'POST',
            url:`${routes.menus.create}`,
            data
        })
    },
    linkPlatToMenu : (id_menu,id_plat)=>{
        return networkService.request({
            method:'PUT',
            url:`${routes.menus.default}/${id_menu}/platMenu/${id_plat}`
        })
    }
}