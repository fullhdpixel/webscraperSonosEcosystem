const rp = require("request-promise");
const cheerio = require("cheerio");

const options = {
  uri: "https://www.sonos.com/en-us/streaming-music",
   headers: {
        'User-Agent': 'Request-Promise'
    },
  transform: function(body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
	var partners = [];
    $('.logo-grid > a > img').each(function(i, elem) {
      // console.log(elem.attribs.alt);
      var partner = elem.attribs.alt;
      partners[i] = partner;
    });
    console.log(partners);
  })
  .catch((err) => {
    console.log(err);
  });

//Alle links met /wiki/
//Daarvan de title attribute

// $(".logo-grid").a img alt