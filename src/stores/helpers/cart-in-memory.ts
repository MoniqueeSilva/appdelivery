import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps){ //verifica se o produto ja foi adicionado no carrinho e ao inves de duplicar, vai incrementar a quantidade
    const existingProduct = products.find(({ id }) => newProduct.id === id )

    if(existingProduct){
        return products.map((product) => product.id === existingProduct.id ? {...product, quantity: product.quantity + 1} : product)
    }

    return [...products, {...newProduct, quantity: 1}]
}

export function remove(products: ProductCartProps[], productRemovedId: string){
    const updatedProducts = products.map((product) =>
        product.id === productRemovedId 
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 0
        }
    : product 
    )

        return updatedProducts.filter((product) => product.quantity > 0)
    }