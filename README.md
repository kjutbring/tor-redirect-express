# tor-redirect-express

An Express middleware, who is a clone of [tor-redirect](https://github.com/redpois0n/tor-redirect)

Redirects TOR users browsing your site over clearweb to your onion address.

Idea by[chloe](https://github.com/intchloe)

## Usage

Fetch list of exit nodes
```bash
$ ./getlist.sh
```

Automatically update exit node list

Add getlist.sh to crontab to schedule fetching of exit-node ips

```bash
$ crontab -e
```

Add to file to fetch exit-node ips 00.00 every day

```bash
00 00 * * * /path/to/getlist.sh
```

Install with npm

```bash
$ npm install https://github.com/kjutbring/tor-redirect-express.git
```

Change in torRedirect.js to include your .onion address

```javascript
var ONION = "youronionaddress.onion";
```

Then in your express app

```javascript
var express = require("express");
var torRedirect = require("torRedirect");

var app = express();

app.use(torRedirect.redirect());
```

Every request will be passed through the torRedirect middleware. If it comes from
an ip address in the list of known tor exit-nodes the request will be forwarded to your
.onion address.  
