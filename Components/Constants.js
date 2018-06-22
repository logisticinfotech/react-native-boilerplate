var { EventEmitter } = require('fbemitter');
module.exports = {
    emitter: new EventEmitter(),
    USER_DATA: 'UserData',
    LOGOUT_EVENT: 'logout',
};