import es6RestClient from '../node_modules/es6-rest-client/dist/client.es6.js'

class RestClient {
    constructor(baseUri) {
        es6RestClient.settings({
            baseURI: baseUri,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + window.sessionStorage.accessToken
            },
        })
        
        this.api = es6RestClient
    }
}

export default RestClient