export const isGithub = window.location.href.includes("github");

const issuesURLGitlab =
	"https://forge.apps.education.fr/url/url.forge.apps.education.fr/-/issues/";
const issuesURLGithub = "https://github.com/eyssette/url/issues/";

export const issuesURLGitlabAPI =
	"https://forge.apps.education.fr/api/v4/projects/2569/issues/";
export const issuesURLGithubAPI =
	"https://api.github.com/repos/eyssette/url/issues/";

export const issuesURL = isGithub ? issuesURLGithub : issuesURLGitlab;
export const newIssueURL = isGithub
	? issuesURLGithub + "new?title="
	: issuesURLGitlab + "new?issue[title]=";
