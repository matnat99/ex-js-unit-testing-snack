function getInitials(fullName) {
  const [firstName, lastName] = fullName.split(" ").filter((c) => c !== "");
  return `${firstName.charAt(0).toUpperCase()},${lastName
    .charAt(0)
    .toUpperCase()}`;
}

module.exports = { getInitials };
