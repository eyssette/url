# Raccourcisseur de lien

**URL** est un raccourcisseur de lien libre et gratuit, sous licence MIT.

Pour l'utiliser, il faut laisser un ticket à cette [adresse](https://forge.apps.education.fr/url/url.forge.apps.education.fr/-/issues/) en mettant l'URL à raccourcir dans le titre du ticket.

Seuls les utilisateurs authentifiés peuvent créer un ticket.

Si votre numéro de ticket est le 1, alors votre raccourci sera le suivant : [https://url.forge.apps.education.fr/#1](https://url.forge.apps.education.fr/#1)

On ne peut avoir que des raccourcis numériques, qui correspondent au numéro du ticket, et on ne peut pas les personnaliser pour que l'URL soit signifiante.

Il est possible de modifier ultérieurement son raccourci en modifiant son ticket.

```warning
**Attention**

Les raccourcis sont **publics** : on ne peut pas créer de raccourci privé. Tout le monde peut voir les raccourcis et identifier les personnes qui les ont créés, en allant sur la page des tickets de cet outil.
```

## Créer votre propre raccourcisseur de lien

Si vous souhaitez créer votre propre raccourcisseur de lien, il faut forker ce projet, exécuter `npm install` puis modifier le fichier `js/config.js` et rebuilder le script `npm run build`.