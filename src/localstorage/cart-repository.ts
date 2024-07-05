import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str);
}

export function get() : OrderDTO {
    const str = localStorage.getItem(CART_KEY) || '{"item":[]}';
    return JSON.parse(str);
}