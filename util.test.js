jest.mock("./http");

const { loadTitle } = require("./util");

test("should print uppercase title", async () => {
  const title = await loadTitle();
  expect(title).toBe("DELECTUS AUT AUTEM");
});
