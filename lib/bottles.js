/* eslint-disable quotes */
// @ts-nocheck
// import { downTo } from "./helpers";

export class Bottles {
  verse(number) {
    return `${number} ${this.getBottleString(
      number
    )} of beer on the wall, ${number} ${this.getBottleString(number)} of beer.
Take one down and pass it around, ${number - 1} ${this.getBottleString(
      number - 1
    )} of beer on the wall.\n`;
  }

  getBottleString(number) {
    const isSingleBottle = number === 1;
    const bottleStr = isSingleBottle ? "bottle" : "bottles";
    return bottleStr;
  }
}
