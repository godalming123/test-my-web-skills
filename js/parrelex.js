parrelexs = document.querySelectorAll(".parrelex");

parrelexs.forEach (parrelex => {
	parrelex.style.zIndex = -1;
})

window.addEventListener("scroll", function() {
	distance = window.scrollY;

	parrelexs.forEach (parrelex => {
		parrelex.style.transform = `translateY(${distance * 0.5}px)`;
	});
});