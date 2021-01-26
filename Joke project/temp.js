const inserts = document.getElementById('insert');
const result = document.getElementById("result");
const options = document.getElementById("option");


function calculateTemp() {
  const input = insert.value;
  const return = options[options.selectedIndex].value == "Celsius" ? (input * 9 / 5) + 32 + "\u00B0 Fahrenheit" : (input - 32) * 5 / 9 + "\u00B0 Celsius";
  result.innerHTML = return;
}

//tempc.addEventListener('submit', calculateTemp);
