const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
 
  

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter the Valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter the Valid Weight";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI IS : ${BMI}`;
    
    if (BMI <= 18.6) {
      const ElementCreation = document.createElement("p");
      ElementCreation.appendChild(
        document.createTextNode("You are Under Weight")
      );
      result.appendChild(ElementCreation);
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      const ElementCreation = document.createElement("p");
      ElementCreation.appendChild(
        document.createTextNode("You are in Normal Range")
      );
      result.appendChild(ElementCreation);
    } else if (BMI >= 24.9) {
      const ElementCreation = document.createElement("p");
      ElementCreation.appendChild(
        document.createTextNode("You are Over Weight")
      );
      result.appendChild(ElementCreation);
    }
  }
});