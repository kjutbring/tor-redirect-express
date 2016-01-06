/*
 * Tor-redirect-express
 * Redirect tor users to using your .onion site
 * 
 * Author: kjutbring
 * Licence: GPL-3.0
 *
 */

function getIp(req) {
    var ip = req.headers["x-forwarded-for"] ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;
    
    var pattern = /\d+\.\d+\.\d+\.\d+$/;
    var userIp = ip.match(pattern);
    
    return userIp[0];
};


module.exports = {
    redirect: function(req, res, next) {    
        var userIp = getIp(req); 
        console.log(userIp);

        next();
    }
}
