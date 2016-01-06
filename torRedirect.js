/*
 * Tor-redirect-express
 * Redirect tor users to using your .onion site
 * 
 * Author: kjutbring
 * Licence: GPL-3.0
 *
 */

function getIp(req) {
    var userIp = req.headers["x-forwarded-for"];
    return userIp;
};

module.exports = {
    redirect: function(req, res, next) {
        console.log(req.hostname);
            
        var userIp = getIp(req); 
        console.log(userIp);

        next();
    }
}
