
function onCloseModal(e) {
	var modal = document.getElementById("imageModal");
	modal.style.display = "none";
}

function onImageClick(e) {
	var modal = document.getElementById("imageModal");
	if (!modal) {
		var modalContainer = document.createElement("div");
		var closeButton = document.createElement("span");
		var image = document.createElement("img");
		var caption = document.createElement("div");
		modalContainer.classList.add("modal");
		modalContainer.id = "imageModal";

		closeButton.appendChild(document.createTextNode("X"));

		closeButton.classList.add("close");
		image.classList.add("modal-content");
		caption.id = "caption";
		modalContainer.onclick = onCloseModal;

		modalContainer.appendChild(closeButton);
		modalContainer.appendChild(image);
		modalContainer.appendChild(caption);
		document.body.appendChild(modalContainer);
		modal = modalContainer;
	}

	var style = e.currentStyle || window.getComputedStyle(e, false);
	var url = style.backgroundImage.slice(4, -1).replace('url(','').replace(')','').replace(/\"/gi, "");

	var img = modal.querySelector(".modal-content");
	img.src = url;
	modal.style.display = "block";

}
