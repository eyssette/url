import { newIssueURL } from "./config";

export function goToTicketURL() {
	document.getElementById("okButton").addEventListener("click", function () {
		const URLtoShorten = document.getElementById("urlInput").value.trim();
		if (URLtoShorten) {
			window.location.href = newIssueURL + URLtoShorten;
		} else {
			alert("Veuillez entrer une URL valide.");
		}
	});
}
