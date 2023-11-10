// Get the bill input element by ID

const billTotalInput = document.getElementById("billTotalInput");

// Get the tip input element by ID
const tipInput = document.getElementById("tipInput");

// Get the number of people input element by ID
const numberOfPeople = document.getElementById("numberOfPeople");

// Get the per person total element by ID
const perPersonTotal = document.getElementById("perPersonTotal");

const plus = document.getElementById("plus_button");
const minus = document.getElementById("minus_button");
const person = document.getElementById("numberOfPeople");
const output = document.getElementById("perPersonTotal");

// Initialize Tipperson variable
let Tipperson = 1;

// Add an event listener to the input element to listen for changes
document.addEventListener("input", function() {
  const inputValue = Number(billTotalInput.value);
  const tipvalue = Number(tipInput.value);
  updatePerPersonTotal();
});

// Plus function
plus.addEventListener("click", function() {
  Tipperson++;
  person.textContent = Tipperson;
  updatePerPersonTotal();
});

// Minus function
minus.addEventListener("click", function() {
  if (Tipperson > 1) {
    Tipperson--;
    person.textContent = Tipperson;
    updatePerPersonTotal();
  }
});

// Function to calculate and update the total per person

function updatePerPersonTotal() {
  const inputValue = Number(billTotalInput.value);
  const tipvalue = Number(tipInput.value);
  const tippercentage = tipvalue / 100;
  const tipamount = tippercentage * inputValue;
  const total = (inputValue + tipamount) / Tipperson;
  output.textContent = `$${total.toFixed(0)}`;
}
updatePerPersonTotal();
// Initial calculation

