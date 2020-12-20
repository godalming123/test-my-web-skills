parrelex = document.querySelectorAll(".parrelex");

window.addEventListener("scroll", function() {
  distance = window.scrollY;

	parrelex.style.opacity = `${100-distance}%`;
	parrelex.style.transform = `translateY(${distance * 0.3}px)`;
});