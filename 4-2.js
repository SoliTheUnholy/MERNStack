function finder(word,sentence) {
    if (sentence.includes(word))
        return true
    return console.error("Word not found");
}
console.log(finder(prompt("Word:"),prompt("Sentence")))