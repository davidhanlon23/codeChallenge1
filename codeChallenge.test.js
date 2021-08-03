const functionsToTest = require("./codeChallenge.js");

// test for main function
// test("Sanity Check for main function", () => {
//     expect(functionsToTest.main()).toBe("hello world");
// });

// test for fileFilter
test("test", () => {
    expect(functionsToTest.filterFile()).toBeDefined();
});

// test for readTextFile
// test("Test for readTextFile(filepath)", () => {
//     // expect(functionsToTest.readTextFile('./Artist_lists_small.txt')).then().toBeDefined();

//     return functionsToTest.readTextFile('./Artist_lists_small.txt').then(data => {
//         expect(data).toBe('d');
//       });
// });