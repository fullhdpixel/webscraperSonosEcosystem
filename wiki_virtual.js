const rp = require("request-promise");
const cheerio = require("cheerio");

const options = {
  uri: "https://en.wikipedia.org/wiki/Virtual_assistant_(artificial_intelligence)#Developer_platforms",
	headers: {
	    "User-Agent": "Request-Promise"
	},
  transform: function(body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
	var labels = [];
    $("#content-collapsible-block-1 > ul > li").each(function(i, elem) {
      console.log(elem.children[0].data);
      var label = elem.children[0].data;
      labels[i] = label;
    });
    console.log(labels);
  })
  .catch((err) => {
    console.log(err);
  });