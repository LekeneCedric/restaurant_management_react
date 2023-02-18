export const routes = {

   plats : {
    create: '/plats/create',
    get : '/plats/read'
   },
   menus : {
    default : '/menus',
    create : '/menus/create',
    get : '/menus/read',
   },
   commande : {
      create:'/commandes/create',
      getByClient:'commandes/client',
      update : '/commandes/update'
   },
   payemenet : {
      payer : '/payment/create'
   }
}