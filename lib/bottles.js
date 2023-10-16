/* eslint-disable quotes */
// @ts-nocheck
import { capitalize } from "./helpers";

export class Bottles {
  verse(number) {
    return this.verseStart(number) + this.verseEnd(number);
  }

  verses(verseOne, verseTwo) {
    return this.verse(verseOne) + "\n" + this.verse(verseTwo);
  }

  verseStart(number) {
    return `${this.makeBottleText(
      number,
      true
    )} of beer on the wall, ${this.makeBottleText(number)} of beer.`;
  }

  verseEnd(number) {
    if (number === 1)
      return "\nTake it down and pass it around, no more bottles of beer on the wall.\n";

    if (number === 0) {
      return "\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }

    return `\nTake one down and pass it around, ${this.makeBottleText(
      number - 1
    )} of beer on the wall.\n`;
  }

  getBottlePlurality(number) {
    const isSingleBottle = number === 1;
    const bottleStr = isSingleBottle ? "bottle" : "bottles";
    return bottleStr;
  }

  getBottleCountString(number, shouldBeCapitalized) {
    const NO_MORE = "no more";
    if (number > 0) return number;
    else {
      return shouldBeCapitalized ? capitalize(NO_MORE) : NO_MORE;
    }
  }

  makeBottleText(number, shouldBeCapitalized = false) {
    return (
      this.getBottleCountString(number, shouldBeCapitalized) +
      " " +
      this.getBottlePlurality(number)
    );
  }
}
