const { getInitials, createSlug, average } = require("./snacks.js");

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mattia Natale")).toBe("M,N");
  expect(getInitials("pinco pallino")).toBe("P,P");
  expect(getInitials("Tizio  Caio")).toBe("T,C");
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("Stringa In lowerCase")).toBe("stringa in lowercase");
});

// Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([10, 15])).toBe(12.5);
  expect(average([10, 15, 30, 5])).toBe(15);
  expect(() => average([10, "15"])).toThrow();
});
