parrelexs = document.querySelectorAll(".parrelex");

parrelexs.forEach (parrelex => {
	parrelex.style.zIndex = -1;
	parrelex.style.position = "relative";
	parrelex.style.transition = "0.15s";
})

window.addEventListener("scroll", function() {
	distance = window.scrollY;

	parrelexs.forEach (parrelex => {
		parrelex.style.transform = `translateY(${distance * 0.5}px)`;
	});
});