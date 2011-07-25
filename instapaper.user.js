// ==UserScript==
// @name Instapaper Archive and Return
// @namespace http://github.com/aitskovi
// @description Adds a link to archive and return to the Instapaper
//              table of contents in one click.
// @include http://www.instapaper.com/go/*
// ==/UserScript==

/* Find the archive url for the current article*/
function archive_url() {
  var path = window.location.pathname;
  var id = path.split("/")[2];
  return "/skip/" + id;
}

/* Add a link at the bottom of the page to archive and return */
function add_archive_url() {
  var link = document.createElement("a");
  link.setAttribute("href",location);
  link.innerHTML = "Archive and Back to Instapaper";
  link.style.float ="right";
  var bottom = document.getElementsByClassName("bar bottom")[0];
  bottom.appendChild(link);
}();
