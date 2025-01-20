function invertString(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

const input = "Live coding todo domingo! www.twitch.tv/patz_ts";
const invertedString = invertString(input);
console.log(invertedString); // Output: st_ztap/vt.hctiwt.www !ognimod odot gnidoc eviL
