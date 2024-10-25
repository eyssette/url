export const corsProxy = "https://corsproxy.io/?";

const isGithub = window.location.href.includes("github");

const issuesURLGitlab =
	"https://forge.apps.education.fr/url/url.forge.apps.education.fr/-/issues/";
const issuesURLGithub = "https://github.com/eyssette/url/issues/";

export const issuesURL = isGithub ? issuesURLGithub : issuesURLGitlab;

const stringIssueGitlab = " \\(#";
const stringIssueGithub = " · Issue #";
const stringIssue = isGithub ? stringIssueGithub : stringIssueGitlab;
export const baseRegexToFindTargeURL = "<title>(.*?)" + stringIssue;
