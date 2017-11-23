const rp = require("request-promise");
const cheerio = require("cheerio");

const options = {
  uri: "https://www.sonymusic.com/labels/",
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
    $('.single-area > .labels-block > .labels-logo > a > div').each(function(i, elem) {
      console.log(elem.children[0].data);
      var label = elem.children[0].data;
      labels[i] = label;
    });
    console.log(labels);
  })
  .catch((err) => {
    console.log(err);
  });