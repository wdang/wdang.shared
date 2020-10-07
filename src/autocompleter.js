/** autocompleter(items) => f(text) => [autocompletion items]
 **
 ** Takes an array of strings and returns a function that
 ** returns suggested autocompletion items when given a string
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

    return data => {
        const _data = data;
        return userInput => {
            userInput = userInput.toLowerCase();
            return _data.filter(containsAllLettersFrom(userInput))
                .sort(prioritizeByPrefixThenAlpha(userInput));
        }
    }
})();