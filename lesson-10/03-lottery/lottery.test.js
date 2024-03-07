import { jest } from "@jest/globals";

jest.unstable_mockModule("./generateNumber.js", () => ({
  default: jest.fn().mockImplementation(() => 10),
}));

const lottery = (await import("./lottery.js")).default;

describe("lottery", () => {
  test("should win when 10", () => {
    const result = lottery(10);
    expect(result).toBe("$$$ You WIN $$$");
  });

  test("should lost when 1", () => {
    const result = lottery(1);
    expect(result).toBe("You lost:(");
  });
});
