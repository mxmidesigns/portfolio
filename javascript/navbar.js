function toggleNavbar() {
	var myTopnav = document.getElementById("myTopnav");
	if (myTopnav.classList.contains("responsive")) {
		myTopnav.classList.remove("responsive");
	} else {
		myTopnav.classList.add("responsive");
	}
}
