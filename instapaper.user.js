// ==UserScript==
// @name Instapaper Archive and Return
// @namespace http://github.com/aitskovi
// @description Adds a link to archive and return to the Instapaper
//              table of contents in one click.
// @include http://www.instapaper.com/go/*
// @include http://www.instapaper.com/text*
// @version 1.1
// ==/UserScript==

/*
 * Find the archive url for the current article
 * @return String, a relative url to the instapaper.com website
 */
function archive_url() {
  var path = window.location.pathname;
  var id = null;

  /* Instapaper has two different url formats for the reading view:
   *    /go/{ID}/text"
   *    /text?q="{SITE}"&article={ID}
   */

  // Attempt to match first url type
  var pattern = /go\/(\d+)\/text/;
  var result = path.match(pattern);
  if (!result) {
    // Match the second URL type (article={ID} style)
    path = window.location.search;
    pattern = /article=(\d+)/;
    result = path.match(pattern);
  }

  // Extract the article id and create a archive_url for it
  id = path.match(pattern)[1];
  return "/skip/" + id;
};

/* Add a link at the bottom of the page to archive and return */
function add_archive_url() {
  var link = document.createElement("a");
  link.setAttribute("href",archive_url());
  link.innerHTML = "Archive and Back to Instapaper";
  link.style.float ="right";
  var bottom = document.getElementsByClassName("bar bottom")[0];
  bottom.appendChild(link);
};

add_archive_url();
