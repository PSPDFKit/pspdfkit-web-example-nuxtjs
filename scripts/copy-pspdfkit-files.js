const ncp = require("ncp").ncp;
const fs = require("fs");

if (!fs.existsSync("./static/js")) {
  fs.mkdirSync("./static/js");
}

ncp(
  "./node_modules/pspdfkit/dist/pspdfkit-lib",
  "./static/js/pspdfkit-lib",
  (err) => {
    err && console.error(err);
  }
);

ncp(
  "./node_modules/pspdfkit/dist/pspdfkit.js",
  "./static/js/pspdfkit.js",
  (err) => {
    err && console.error(err);
  }
);
