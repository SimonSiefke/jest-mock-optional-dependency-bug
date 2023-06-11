import { jest } from "@jest/globals";

beforeEach(() => {
  jest.resetAllMocks();
});

jest.unstable_mockModule("some-optional-dependency", () => ({}));

const Index = await import("../src/index.js");

test("some test", async () => {
  expect(1).toBe(1);
});
