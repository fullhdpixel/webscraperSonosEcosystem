const rp = require("request-promise");
const cheerio = require("cheerio");

const options = {
  uri: "https://en.wikipedia.org/wiki/List_of_Warner_Music_Group_labels",
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
	console.log($("#content-collapsible-block-1 > ul > li"))
    $("#content-collapsible-block-1 > ul > li").each(function(i, elem) {
      console.log(elem);
      var label = elem.children[0].data;
      labels[i] = label;
    });
    console.log(labels);
  })
  .catch((err) => {
    console.log(err);
  });