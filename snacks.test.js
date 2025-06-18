const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./snacks.js");

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mattia Natale")).toBe("M,N");
  expect(getInitials("pinco pallino")).toBe("P,P");
  expect(getInitials("Tizio  Caio")).toBe("T,C");
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("Stringa In lowerCase")).toBe("stringa-in-lowercase");
});

// Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([10, 15])).toBe(12.5);
  expect(average([10, 15, 30, 5])).toBe(15);
  expect(() => average([10, "15"])).toThrow();
});

// Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Stringa In lowerCase")).toBe("stringa-in-lowercase");
});

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("osso ")).toBeTruthy();
  expect(isPalindrome("ossa")).toBeFalsy();
});

// Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => createSlug("")).toThrow("Titolo non valido");
});

const posts = [
  {
    id: 1,
    title: "Introduzione a JavaScript",
    slug: "introduzione-a-javascript",
  },
  {
    id: 2,
    title: "Guida a React",
    slug: "guida-a-react",
  },
  {
    id: 3,
    title: "Cos'è il DOM",
    slug: "cos-e-il-dom",
  },
];

// Snack 7
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "Guida a React",
    slug: "guida-a-react",
  });
  expect(findPostById(posts, 4)).toBe(null);
  expect(() => findPostById(posts, "2")).toThrow("Id non valido");
  expect(() => findPostById([20, 30], 2)).toThrow(
    "Formato dell'array non corretto"
  );
});
