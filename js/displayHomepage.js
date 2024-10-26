import { issuesURL } from "./config";
import { goToTicketURL } from "./goToTicketURL";

const homepageContent = `
<h1>🔗 Raccourcisseur de lien</h1>
<p>Pour utiliser ce raccourcisseur de lien, il faut laisser un ticket à cette <a href="${issuesURL}">adresse</a> en mettant l'URL à raccourcir dans le titre du ticket.</p>
<div>Pour aller plus vite, <label for="urlInput">indiquez ici l'URL à raccourcir :</label> <div><input type="text" id="urlInput" placeholder="Entrez l'URL ici"> <button id="okButton">Créer le ticket</button></div></div>
<p>Seuls les utilisateurs authentifiés peuvent créer un ticket.</p>
<p>Si votre numéro de ticket est le 1, alors votre raccourci sera le suivant : <a href="${window.location.href}#1" target="_blank">${window.location.href}#1</a></p>
<p>On ne peut avoir que des raccourcis numériques, qui correspondent au numéro du ticket, et on ne peut pas les personnaliser pour que l'URL soit signifiante.</p>
<p>Il est possible de modifier ultérieurement son raccourci en modifiant son ticket.</p>
<div class="admonition warning">
  <p class="admonition-title">Attention</p>
  <p>Les raccourcis sont <strong>publics</strong> : on ne peut pas créer de raccourci privé. Tout le monde peut voir les raccourcis et identifier les personnes qui les ont créés, en allant sur la page des tickets de cet outil.</p>
</div>
`;

export function displayHomepage() {
	document.body.innerHTML = homepageContent;
	goToTicketURL();
}
