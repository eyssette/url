import { issuesURL } from "./config";

const homepageContent = `
<h1>🔗 Raccourcisseur de lien</h1>
<p>Pour utiliser ce raccourcisseur de lien, il faut laisser un ticket à cette adresse : <a href="${issuesURL}">${issuesURL}</a></p>
<p>Il suffit de créer un nouveau ticket en mettant l'URL à raccourcir dans le titre du ticket</p>
<p>Si votre numéro de ticket est le 1, alors votre raccourci sera alors le suivant : <a href="${window.location.href}#1" target="_blank">${window.location.href}#1</a></p>
`;

export function displayHomepage() {
	document.body.innerHTML = homepageContent;
}
