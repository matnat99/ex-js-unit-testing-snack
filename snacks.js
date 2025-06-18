function getInitials(fullName) {
  const [firstName, lastName] = fullName.split(" ").filter((c) => c !== "");
  return `${firstName.charAt(0).toUpperCase()},${lastName
    .charAt(0)
    .toUpperCase()}`;
}

function createSlug(string) {
  if (!string) {
    throw new Error("Titolo non valido");
  }
  return string.toLowerCase().replaceAll(" ", "-");
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

function isPalindrome(string) {
  const reverseString = string.trim().split("").reverse().join("");
  return reverseString === string.trim();
}

function findPostById(posts, id) {
  if (typeof id !== "number") {
    throw new Error("Id non valido");
  }
  posts.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error("Formato dell'array non corretto");
    }
  });
  return posts.find((post) => post.id === id) || null;
}

function addPost(posts, post) {
  const ids = posts.map((post) => post.id);
  const slugs = posts.map((post) => post.slug);
  if (ids.includes(post.id)) {
    throw new Error("Id già esistente");
  }
  if (slugs.includes(post.slug)) {
    throw new Error("Slug già esistente");
  }
  posts.push(post);
}

function removePost(posts, id) {
  const index = posts.findIndex((post) => post.id === id);
  posts.splice(index, 3);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
};
