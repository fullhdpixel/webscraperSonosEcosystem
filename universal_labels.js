const rp = require("request-promise");
const cheerio = require("cheerio");

const options = {
  uri: "https://www.universalmusic.com/labels/",
	headers: {
	    'User-Agent': 'Request-Promise'
	},
  transform: function(body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
	var labels = [];
    $('.labels > li > a').each(function(i, elem) {
      console.log(elem.children[0].data);
      var label = elem.children[0].data;
      labels[i] = label;
    });
    console.log(labels);
  })
  .catch((err) => {
    console.log(err);
  });