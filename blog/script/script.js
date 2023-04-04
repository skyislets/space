const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach((link) => {
	link.addEventListener('click', () => {
		sidebarLinks.forEach((link) => {
			link.classList.remove('active');
		});
		link.classList.add('active');
	});
});

