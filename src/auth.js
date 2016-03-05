import authClient from '../node_modules/es6-rest-client/dist/client.es6.js'

export default class AuthService {
    constructor(baseUri) {
        this.baseUri = baseUri
    }

    authenticate(username, password) {
        authClient.settings({
            baseURI: this.baseUri,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        const request = {
            username: username,
            password: password,
            grant_type: 'password'
        }

        authClient.token.post(request)
            .then(function (result) {
                window.sessionStorage.accessToken = result.access_token
            })
            .catch(function (error) {

            })
    }

    isAuthenticated() {
        const user = JSON.parse(window.sessionStorage.access_token) || null

        return !!user
    }
}