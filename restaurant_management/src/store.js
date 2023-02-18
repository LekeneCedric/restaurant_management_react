import { create } from "zustand";

export const panierStore   = create((set)=>(
    {
        produit:[],
        panier_produit : [],
        quantite_produit : [],
        
        addProduit : (prod,id)=>set((state)=>(
            {
                produit:[...state.produit,prod],
                panier_produit : [...state.panier_produit,id],
                quantite_produit : [...state.quantite_produit,1],
            }
        )),
        removeProduit : (new_store)=>set((state)=>(
            new_store
        )),
        incrementProduit : (new_tab)=>set((state)=>
            ({
                produit:[...state.produit],
                panier_produit : [...state.panier_produit],
                quantite_produit:new_tab
            })),
        decrementProduit : (new_tab)=>set((state)=>
            ({
                produit:[...state.produit],
                panier_produit : [...state.panier_produit],
                quantite_produit:new_tab
            }))
    }
))