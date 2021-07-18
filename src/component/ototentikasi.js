export function LoggedIn(){
    return localStorage.getItem('access_token_api') !== null && localStorage.getItem('access_token_api') !== 'undefined';
}
export function hapusToken(){
    localStorage.removeItem('access_token_api');
    localStorage.removeItem('email')
}
export function AuthNeeds(nextState, replace){
    if(!LoggedIn()){
        replace({
            pathname : '/',
            state : {nextPathname : nextState.location.pathname}
        })
    }
}

