import generateNumber from "./generateNumber.js";

function lottery(expect) {
  const actual = generateNumber();

  console.log({ actual });

  if (actual !== expect) {
    return "You lost:(";
  }

  return "$$$ You WIN $$$";
}

export default lottery;
