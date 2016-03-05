import RestClient from './rest-client'
import AuthClient from './auth'

export default class Session {
    constructor(authBaseUri, apiBaseUri) {
        this.authClient = new AuthClient(authBaseUri) 
        this.restClient = new RestClient(apiBaseUri)
    }

    login(user, pass) {
        this.authClient.authenticate(user, pass)
        
        this.restClient.api.account.profile()
            .then(function (stream) {
                const user = stream.json()
                window.sessionStorage.setItem('user', JSON.stringify(user))
            })
    }
    
    logout() {
        this.restClient.account.signout.delete()

        delete window.sessionStorage.accessToken;
        delete window.sessionStorage.user;
    }
}