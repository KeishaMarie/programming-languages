// UI Logic
window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    console.log('event default prevented')
    
    let selectedAnimal = document.querySelector('input[name="animal"]');
    let selectedMushroom = document.querySelector('input[name="mushroom"]');
    console.log(selectedAnimal, selectedMushroom)
    document.getElementById("languageOutput").innerText = ;
  }
};

window.addEventListener("load", function() {
  const form = document.getElementById("survey")
  form.addEventListener("submit", createLanguageResults);
});

// const selectedAnimal = document.querySelector("input#animal").value;
// // const color = document.querySelector("color").value;
// const selectedMushroom = document.querySelector("input#mushroom").value;
// // const flower = document.querySelector("flower").value;
// // const food = document.querySelector("food").value;

function createLanguageResults(selectedAnimal, selectedMushroom) {
  // let selectedAnimal;
  // let selectedMushroom;
  if (selectedAnimal === "Red Panda" && selectedMushroom === "Bioluminescent") {
     return "Ruby";
  }
  else if (selectedAnimal === "Red Panda" && selectedMushroom === "Cordycep") {
     return "Python";
  }
  else return "C#";
};





















// function hideResults() {
//   document.getElementById("ruby").setAttribute("class", "hidden");
//   document.getElementById("c#").setAttribute("class", "hidden");
//   document.getElementById("python").setAttribute("class", "hidden");
// }
// //event handler
// window.addEventListener("load", function() {
//   const form = document.getElementById("survey");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const animal = document.querySelector("animal").value;
//     const color = document.querySelector("color").value;
//     const mushroom = document.querySelector("mushroom").value;
//     const flower = document.querySelector("flower").value;
//     const food = document.querySelector("food").value;

//   let result = document.querySelector("animal");
//   if(animal === "redPanda") {
//     result = document.getElementById("ruby").removeAttribute("class", "hidden");
//   } else if (animal === "manatee") {
//     result = document.getElementById("c#").removeAttribute("class", "hidden");;
//   }
//   document.getElementById("output").innerText = animal;
//   document.querySelector("div#animal").removeAttribute("class", "hidden");

//   let color = document.querySelector("color");
//   if(color === "periwinkle") {
//     result = document.getElementById("python").removeAttribute("class", "hidden");;
//    } else if (color === "emeraldGreen") {
//     result = document.getElementById("ruby").removeAttribute("class", "hidden");;
//    }

//    let mushroom = document.querySelector("mushroom");
//    if(mushroom === "biolumMushroom") {
//     result = document.getElementById("c#").removeAttribute("class", "hidden");;
//    } else if(mushroom === "cordycep") {
//     result = document.getElementById("python").removeAttribute("class", "hidden");;
//    }

//   let flower = document.querySelector("flower");
//   if(flower === "orchid") {
//     result = document.getElementById("ruby").removeAttribute("class", "hidden");;
//   } else if(flower === "dahlia") {
//     result = document.getElementById("c#").removeAttribute("class", "hidden");;
//   }

//   let food = document.querySelector("food");
//   if(food === "momsSpaghetti") {
//     result = document.getElementById("python").removeAttribute("class", "hidden");;
//   } else if(food === "tacos") {
//     result = document.getElementById("ruby").removeAttribute("class", "hidden");;
//   }

//   //results
//   }); 
// });
// //  results 
// //  < othon > c# = jas