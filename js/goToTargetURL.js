import { isGithub, issuesURLGitlabAPI, issuesURLGithubAPI } from "./config";

function filterJson(element, targetID) {
	return isGithub ? element.number == targetID : element.iid == targetID;
}

// On redirige vers l'URL correspondante
export async function goToTargetURL(targetID) {
	const url = isGithub ? issuesURLGithubAPI : issuesURLGitlabAPI;

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
			const target = json.filter((element) => filterJson(element, targetID));
			if (target.length > 0) {
				const targetURL = target[0].title;
				window.location.href = targetURL;
			}
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}
