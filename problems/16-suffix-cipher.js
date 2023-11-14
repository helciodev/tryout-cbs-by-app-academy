/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sentence, obj) {
  const sentenceArr = sentence.split(" ");
  const newArr = [];
  const [key1, key2] = Object.keys(obj);

  for (let i = 0; i < sentenceArr.length; i++) {
    let currentWord = sentenceArr[i];

    if (currentWord.endsWith(key1)) {
      let transformed = obj[key1](currentWord);
      newArr.push(transformed);
    } else if (currentWord.endsWith(key2)) {
      newArr.push(obj[key2](currentWord));
    } else {
      newArr.push(currentWord);
    }
  }

  return newArr.join(" ");
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
