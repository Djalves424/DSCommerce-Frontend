import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { OrderDTO } from "../models/order";

export function findByRequest(id: number) {

    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}

export function placeOrderRequest(cart: OrderDTO) {

    const config: AxiosRequestConfig = {
        url: "/orders",
        method: "POST",
        withCredentials: true,
        data: cart
    }

    return requestBackend(config);
}