/*
 * Tor-redirect-express
 * Redirect tor users to using your .onion site
 * 
 * Author: kjutbring
 * Licence: GPL-3.0
 *
 */

module.exports = {
    redirect: function(req, res, next) {
        console.log(req.hostname);
        next();
    }
}
