import Session from './session'

const server = 'http://192.168.0.128:52855/'

var session = new Session(server + 'token', server + 'api')

session.login('user', 'abc123')