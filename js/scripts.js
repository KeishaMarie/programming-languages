window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    console.log('event default prevented')
    
    let selectedAnimal = document.querySelector('input[name="animal"]:checked').value;
    let selectedMushroom = document.querySelector('input[name="mushroom"]:checked').value;
    console.log(selectedAnimal, selectedMushroom)
    languageMatch = createLanguageResults(selectedAnimal, selectedMushroom);
    console.log(languageMatch)
    document.getElementById("languageOutput").innerText = languageMatch;
  }
};

window.addEventListener("load", function() {
  const form = document.getElementById("survey")
  form.addEventListener("submit", createLanguageResults);
});

function createLanguageResults(selectedAnimal, selectedMushroom) {
  if (selectedAnimal === "redPanda" && selectedMushroom === "biolumMushroom") {
     return "Ruby";
  }
  else if (selectedAnimal === "redPanda" && selectedMushroom === "cordycep") {
     return "Python";
  }
  else return "C#";
};
