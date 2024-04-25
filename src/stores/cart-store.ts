// Manipulação de estado global para o carrinho e os pedidos

import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as cartInMemory from "./helpers/cart-in-memory"

export type ProductCartProps = ProductProps & { //Pegando todas as informações dos itens do productProps
    quantity: number //Adicinando a quantidade de pedidos 
}

type StateProps = {
    products: ProductCartProps[]
    add: (product: ProductProps) => void  //Add no carrinho
    remove: (productId: string) => void
    clear: () => void
}

export const useCartStore = create(persist<StateProps>((set) => ({ //função para add produto no carrinho
    products: [],
        add:  (product: ProductProps) => 
        set((state) => ({
            products: cartInMemory.add(state.products, product)
        })),

        remove: (productId: string) =>
            set((state) => ({
                products: cartInMemory.remove(state.products, productId)
            })),
        clear: () => set(() => ({ products: [] }))
}), {
    name: "nlw-expert:cart", 
    storage: createJSONStorage(() => AsyncStorage)
    }
))
