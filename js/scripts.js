function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");

}

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const animal = document.getElementsByName("animal").value;
    const color = document.getElementsByName("color").value;
    const mushroom = document.getElementsByName("mushroom").value;
    const flower = document.getElementsByName("flower").value;
    const food = document.getElementsByName("food").value;
  });

  let animal = document.querySelector("animal");
  if(animal === "redPanda") {
    result = document.getElementById("ruby").removeAttribute("class", "hidden");
  } else if (animal === "manatee") {
    result = document.getElementById("c#").removeAttribute("class", "hidden");;
  }

  let color = document.querySelector("color");
  if(color === "periwinkle") {
    result = document.getElementById("python").removeAttribute("class", "hidden");;
   } else if (color === "emeraldGreen") {
    result = document.getElementById("ruby").removeAttribute("class", "hidden");;
   }

   let mushroom = document.querySelector("mushroom");
   if(mushroom === "biolumMushroom") {
    result = document.getElementById("c#").removeAttribute("class", "hidden");;
   } else if(mushroom === "cordycep") {
    result = document.getElementById("python").removeAttribute("class", "hidden");;
   }

  let flower = document.querySelector("flower");
  if(flower === "orchid") {
    result = document.getElementById("ruby").removeAttribute("class", "hidden");;
  } else if(flower === "dahlia") {
    result = document.getElementById("c#").removeAttribute("class", "hidden");;
  }

  let food = document.querySelector("food");
  if(food === "momsSpaghetti") {
    result = document.getElementById("python").removeAttribute("class", "hidden");;
  } else if(food === "tacos") {
    result = document.getElementById("ruby").removeAttribute("class", "hidden");;
  }
  });
 



  // document.getElementById("output").innerText = result;
  // document.querySelector("div#output").removeAttribute("class");
