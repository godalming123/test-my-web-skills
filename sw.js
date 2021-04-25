var cacheName = "my catched urls";
var urlsToChache = [
	
]

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			console.log("chache opened")
			return cache.addAll(urlsToChache)
		})
	)
})

