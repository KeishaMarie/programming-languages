function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");

}

window.addEventListener("load", function() {
  let form = document.getElementById("survey");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const animal = document.getElementByName("animal").value;
    const color = document.getElementByName("color").value;
    const mushroom = document.getElementByName("mushroom").value;
    const flower = document.getElementByName("flower").value;
    const food = document.getElementByIName("food").value;

  let result;
  if(animal === "redPanda") {
    result = document.getElementById("ruby)")
  } else if (animal === manatee) {
    result = "c#";
  }
  document.getElementById("output").innerText = result;
  document.querySelector("div#output").removeAttribute("class");

  });
});
