"use strict";

var cacheName = "my catched urls";
var urlsToChache = [];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    console.log("chache opened");
    return cache.addAll(urlsToChache);
  }));
});