function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
	updateList();
})
// Download CV
function downloadCV() {
	var element = document.createElement('a');
	element.setAttribute('href', 'assets/pdf/Mohamed-Samy-CV.pdf'); 
	element.setAttribute('download', 'Mohamed_CV'); 
	element.click();

}

document.getElementById('downloadBtn').addEventListener('click', downloadCV);
