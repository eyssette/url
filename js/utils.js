export function toNumber(value) {
	// Vérifie si la valeur est déjà un nombre
	if (typeof value === "number" && !isNaN(value)) {
		return value;
	}

	// Tente de convertir en nombre si c'est une chaîne de caractères
	const convertedValue = Number(value);
	if (!isNaN(convertedValue)) {
		return convertedValue;
	}

	// Retourne null si la conversion a échoué
	return null;
}
