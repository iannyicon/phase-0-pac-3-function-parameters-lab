function introduction(Ian) {
    return `Hi, my name is ${Ian}.`;
}

function introductionWithLanguage(Ian, JavaScript) {
    return `Hi, my name is ${Ian} and I am learning to program in ${JavaScript}.`;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  introduction("John");  // Output: "Hi, my name is John."

    introductionWithLanguage("John", "JavaScript");  // Output: