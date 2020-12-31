// make parralex list consisting of html item with the attribute scroll-speed
var parrelexs = [];

document.querySelectorAll("*[scroll-speed]").forEach(item => {
	//set attributes on item
	item.translateSpeed = 1 - item.getAttribute("scroll-speed");
	item.style.zIndex = -1;
	item.style.position = "relative";
	item.style.transition = "0s";
	//push item to list
	parrelexs.push(item);
})

//add event listener to transform on scroll
window.addEventListener("scroll", function() {
	distance = window.scrollY;

	parrelexs.forEach (parrelex => {
		parrelex.style.transform = `translateY(${distance * parrelex.translateSpeed}px)`
	});
});