/* eslint-disable quotes */
// @ts-nocheck
import { capitalize, downTo } from "./helpers";

export class Bottles {
  verse(number) {
    return this.verseStart(number) + this.verseEnd(number);
  }

  verses(high, low) {
    return downTo(high, low)
      .map((num) => this.verse(num))
      .join("\n");
  }

  song() {
    return this.verses(99, 0);
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
    return number === 1 ? "bottle" : "bottles";
  }

  getBottleCount(number, shouldBeCapitalized) {
    const NO_MORE = "no more";
    if (number > 0) return number;
    else {
      return shouldBeCapitalized ? capitalize(NO_MORE) : NO_MORE;
    }
  }

  makeBottleText(number, shouldBeCapitalized = false) {
    return `${this.getBottleCount(
      number,
      shouldBeCapitalized
    )} ${this.getBottlePlurality(number)}`;
  }
}
