import { getSession } from "./authService";

export function formatMoney (value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value);
}

export function userBalance () {
    const user = getSession();

    return user.amount;
}