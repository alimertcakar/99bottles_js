/* eslint-disable quotes */
// @ts-nocheck
// import { downTo } from "./helpers";

export class Bottles {
  verseStart(number) {
    return `${this.makeBottleText(
      number
    )} of beer on the wall, ${this.makeBottleText(number)} of beer.`;
  }

  verseEnd(number) {
    if (number === 1)
      return "\nTake it down and pass it around, no more bottles of beer on the wall.\n";

    return `\nTake one down and pass it around, ${this.makeBottleText(
      number - 1
    )} of beer on the wall.\n`;
  }

  verse(number) {
    return this.verseStart(number) + this.verseEnd(number);
  }

  getBottlePlurality(number) {
    const isSingleBottle = number === 1;
    const bottleStr = isSingleBottle ? "bottle" : "bottles";
    return bottleStr;
  }

  getBottleCountString(number) {
    if (number > 0) return number;
    else {
      return "no more";
    }
  }

  makeBottleText(number) {
    return (
      this.getBottleCountString(number) + " " + this.getBottlePlurality(number)
    );
  }
}
