function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");

}

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const animal = document.getElementByName("animal").value;
    const color = document.getElementByName("color").value;
    const mushroom = document.getElementByName("mushroom").value;
    const flower = document.getElementByName("flower").value;
    const food = document.getElementByIName("food").value;

  let animalResult;
  if(animal === "redPanda") {
    result = document.getElementById("ruby");
  } else if (animal === manatee) {
    result = document.getElementById("c#");
  }

  let colorResult;
  if(color === "periwinkle") {
    result = document.getElementById("python");
   } else if (color === "emeraldGreen") {
    result = document.getElementById("ruby");
   }

   let mushroomResult;
   if(mushroom === "biolumMushroom") {
    result = document.getElementById("c#");
   } else if(mushroom === "cordycep") {
    result = document.getElementById("python");
   }

  let flowerResult;
  if(flower === "orchid") {
    result = document.getElementById("ruby");
  } else if(flower === "dahlia") {
    result = document.getElementById("c#");
  }

  let foodResult;
  if(food === "momsSpaghetti") {
    result = document.getElementById("python");
  } else if(food === "tacos") {
    result = document.getElementById("ruby");
  }
  });
});
 



  document.getElementById("output").innerText = result;
  // document.querySelector("div#output").removeAttribute("class");
