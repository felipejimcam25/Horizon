import { storage } from "./storageService";

const SESSION_KEY = 'session';

export function authLogin (username, password) {
    const users = storage.get("users");
    

    const user = users.find(user => user.username === username && user.password === password);

    if(!user) {
        throw new Error('Invalid username or password')
    }

    storage.set("session", user)

    return user;
}

export function getSession() {
    return storage.get('session');
}

export function setSession (session) {
    storage.set(SESSION_KEY, session)
}




