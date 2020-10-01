// Adds an "s" to a string if the number provided is anything other than 1 or -1
// If we ever need anything fancier we can just replace this with https://www.npmjs.com/package/pluralize

export default function pluralize(str, num = 0) {
  return Math.abs(num) === 1 ? str : str + "s";
}
