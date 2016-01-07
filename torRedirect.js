/*
 * Tor-redirect-express
 * Redirect tor users to using your .onion site
 * 
 * Author: kjutbring
 * Licence: GPL-3.0
 *
 */

var ONION = "youronionaddress.onion";

var fs = require("fs");

/*
 * Get and return the clients ip address.
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

/*
 * Compare client ip with tor exit-nodes.
 * If a match is found return true.
 *
 */
function compareIp(clientIp) { 
    
    var result = false;  

    var torArray = fs.readFileSync("list.txt").toString().split("\n"); 
    
    for (ip in torArray) {
        if (torArray[ip] == clientIp) {
            var result = true;
        }
    }
    return result;
};

module.exports = {
    redirect: function(req, res, next) {    
        var userIp = getIp(req); 
        
        var isFound = compareIp(userIp);

        if (compareIp(userIp) == true) {
            res.writeHead(301, {
                Location: ONION
            });
            res.end();
        } else {
            next(); 
        }
    }
}
