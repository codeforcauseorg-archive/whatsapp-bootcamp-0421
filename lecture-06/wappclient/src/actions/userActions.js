export const LOGIN = "@account/login";
export const LOGOUT = "@account/logout";
export const SETCHAT = "@account/setchat";
export const SETSOCKET = "@account/setsocket";


export function login(user){

    return {
        type : LOGIN,
        payload : user
    }

}

export function logout(){

    return {
        type : LOGOUT
    }

}

export function setChat(contact){

    return {
        type : SETCHAT,
        payload : contact
    }

}

export function setSocket(socket){

    return {
        type : SETSOCKET,
        payload : socket
    }

}
