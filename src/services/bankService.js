import { getSession, setSession } from "./authService";
import { storage } from "./storageService";

//LOCALSTORAGES KEYS
const USERS_KEY = 'users';


export function formatMoney (value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value);
}

export function userBalance () {
    const user = getSession();
    return user.balance;
}

//SAVE USERS
function setUsers (users) {
    storage.set(USERS_KEY, users);
}


//SAVE LAST PERCENTAGE
export function calculatePercentageChange (previous, current) {
    if(previous === 0) return 0;

    const change = ((current - previous) / previous) * 100;
    return Number(change.toFixed(2));
}


//DEPOSIT MONEY
export function deposit(amount) {
    const session = getSession();
    const users = storage.get(USERS_KEY);


    const previousBalance = session.balance;
    const newBalance = previousBalance + amount;

    const percentage = calculatePercentageChange(
        previousBalance,
        newBalance
    );

    //UPDATE SESSION
    const updatedSession = { ...session, balance: newBalance };
    setSession(updatedSession);

    const updatedUsers = users.map(user => 
        user.username === session.username ? { ...user, balance: newBalance } : user
    )

    setUsers(updatedUsers);

    return {
        balance: newBalance, 
        percentage
    }
}

// WITHDRAW MONEY
export function withdraw(amount) {
    const session = getSession();
    const users = storage.get(USERS_KEY);


    if ( amount > session.balance ){
        throw new Error('Payment declined due to insufficient funds.')
    }

    const previousBalance = session.balance;

    const newBalance = previousBalance - amount;

    const percentage = calculatePercentageChange(
        previousBalance, 
        newBalance
    );

     //UPDATE SESSION
    const updatedSession = { ...session, balance: newBalance };
    setSession(updatedSession);

    const updatedUsers = users.map(user => 
        user.username === session.username ? { ...user, balance: newBalance } : user
    )

    setUsers(updatedUsers);

    return {
        balance: newBalance, 
        percentage
    }
}