/** autocompleter(items) => f(text) => [suggested autocompletion items]
 **
 ** Takes an array of strings and returns a function that
 ** returns suggested autocompletion items when given a string.
 ** The returned results are sorted by prefix then alphabetized
 **
 ** Case-insensitive
 */
export default autocompleter = (() => {
    const isSubstringOf = str => substr => str.toLowerCase().includes(substr.toLowerCase());
    const containsAllLettersFrom = str => target => str.toLowerCase().split('').every(isSubstringOf(target));
    const prefixedOrSuffixedWith = suffixOrPrefix => {
        suffixOrPrefix = suffixOrPrefix.toLowerCase();
        return word => {
            word = word.toLowerCase();
            return word.startsWith(suffixOrPrefix) || word.endsWith(suffixOrPrefix);
        }
    }
    const prioritizeByPrefixThenAlpha = prefix => (a, b) => (prefixedOrSuffixedWith(prefix)(a)) ? -1 : a.localeCompare(b);

    return function(data) {
        return function(userInput) {
            userInput = userInput.toLowerCase();
            return data.filter(containsAllLettersFrom(userInput))
                .sort(prioritizeByPrefixThenAlpha(userInput));
        }
    }
})();