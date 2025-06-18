function getInitials(fullName) {
  const [firstName, lastName] = fullName.split(" ").filter((c) => c !== "");
  return `${firstName.charAt(0).toUpperCase()},${lastName
    .charAt(0)
    .toUpperCase()}`;
}

function createSlug(string) {
  return string.toLowerCase();
}

function average(numbers) {
  numbers.forEach((num) => {
    if (typeof num !== "number") {
      throw new Error("Inserire solo numeri");
    }
  });
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

module.exports = { getInitials, createSlug, average };
