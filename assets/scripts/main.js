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
	// Create a dummy element to trigger the download
	var element = document.createElement('a');
	element.setAttribute('href', '/assets/pdf/Mohamed_Samy Abdelfatah_Resume.pdf'); // Replace with the actual path to your CV file
	element.setAttribute('download', 'mohamedCV'); // Replace with the desired file name
	element.click();

}

document.getElementById('downloadBtn').addEventListener('click', downloadCV);
