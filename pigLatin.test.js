
let main = require("./pigLatin");

// test vowels

test("Starts with a", () => {
  let result = main.translate("apple");
  expect(result).toBe("appleway");
});

test("Starts with e", ()=>{
  let result = main.translate("else")
  expect(result).toBe("elseway");
});

test("Starts with i", ()=>{
let result = main.translate("italic")
  expect(result).toBe("italicway");
});

test("Starts with o", ()=>{
  let result = main.translate("oval")
  expect(result).toBe("ovalway");
});

test("Starts with u", ()=>{
  let result = main.translate("under")
  expect(result).toBe("underway")
});

// test consonants

test("Starts with g", ()=>{
  let result = main.translate("giraffe")
  expect(result).toBe("iraffegay")
})

test("Starts with h", ()=>{
  let result = main.translate("house")
  expect(result).toBe("ousehay")
})

test ("Starts with bl", ()=>{
  let result = main.translate("blank")
  expect(result).toBe("ankblay")
})

test("Starts with scr", ()=>{
  let result = main.translate("scrap")
  expect(result).toBe("apscray")
})

// test lowercase

test("Changes to lowercase", ()=>{
  let result = main.translate("Apple")
  expect(result).toBe("appleway")
})