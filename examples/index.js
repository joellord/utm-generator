const UTMGen = require("../src/index.js");

let utmgen = new UTMGen({
  target: "http://javascripteverything.com",
  source: "Twitch",
  campaign: "twitchpromo",
  medium: "socialmedia",
  content: "sourcecode",
  term: "utm generator"
});


let link = utmgen.getLink();
console.log(link);