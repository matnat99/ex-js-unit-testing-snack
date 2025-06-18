const { getInitials } = require("./snacks.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mattia Natale")).toBe("M,N");
  expect(getInitials("pinco pallino")).toBe("P,P");
  expect(getInitials("Tizio  Caio")).toBe("T,C");
});
