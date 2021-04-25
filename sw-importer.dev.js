"use strict";

window.addEventListener("load", function () {
  navigator.serviceWorker.register("sw.js").then(function (registation) {});
});