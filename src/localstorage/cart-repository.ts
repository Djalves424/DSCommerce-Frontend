import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devsuperior.dscommerce/Cart", str);
}

export function get() : OrderDTO {
    const str = localStorage.getItem("com.devsuperior.dscommerce/Cart") || '{"item"=[]}';
    return JSON.parse(str);
}