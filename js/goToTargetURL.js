import { corsProxy, issuesURL } from "./config";

// On redirige vers l'URL correspondante
export async function goToTargetURL(targetID) {
	const url = corsProxy + issuesURL + targetID;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const html = await response.text();
		const regex = "<title>(.*?) \\(#" + targetID;
		const titleElement = html.match(regex);

		let targetURL;
		if (titleElement) {
			targetURL = titleElement[1].trim();
		}
		window.location.href = targetURL;
	} catch (error) {
		console.error("Erreur lors de la récupération de l'issue :", error);
		return null;
	}
}
