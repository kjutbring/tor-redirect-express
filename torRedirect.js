/*
 * Tor-redirect-express
 * Redirect tor users to using your .onion site
 * 
 * Author: kjutbring
 * Licence: GPL-3.0
 *
 */

function getIp(req) {
    var userIp = req.headers["x-forwarded-for"] ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;
    return userIp;
};

module.exports = {
    redirect: function(req, res, next) {    
        var userIp = getIp(req); 
        console.log(userIp);

        next();
    }
}
