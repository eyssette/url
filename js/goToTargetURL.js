import { isGithub, issuesURLGitlabAPI, issuesURLGithubAPI } from "./config";

// On redirige vers l'URL correspondante
export async function goToTargetURL(targetID) {
	const url = isGithub
		? issuesURLGithubAPI + targetID
		: issuesURLGitlabAPI + targetID;

	fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((json) => {
			if (json) {
				const targetURL = json.title;
				window.location.href = targetURL;
			}
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}
