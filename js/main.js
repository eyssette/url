import "../css/styles.css";
import { toNumber } from "./utils";
import { goToTargetURL } from "./goToTargetURL";
import { displayHomepage } from "./displayHomepage";

// On récupère l'ID après le hash
const targetID = window.location.hash.substring(1).replace(/\?.*/, "");
const targetIDtoNumber = toNumber(targetID);

if (targetIDtoNumber) {
	goToTargetURL(targetIDtoNumber);
} else {
	displayHomepage();
}
