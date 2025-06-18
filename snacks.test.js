const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
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
