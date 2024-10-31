export const getInitials = (name) => {
	// If no name, return an *
	if (!name) {
		return '*';
	}

	const firstInitial = name[0];
	const spaceIndex = name.indexOf(' ');

	// return first initial if no space was found in name (index of -1)
	if (spaceIndex < 0) {
		return firstInitial;
	}

	const lastInitial = name[spaceIndex + 1];
	return firstInitial + lastInitial;
};
