var A = ["cake", "apple pie", "cookie", "chips", "patties"];

  // Get user input
  var userInput = prompt("Welcome to PAK bakery.What do you want to ordersir/mam:").toLowerCase();

  // Convert array items to lowercase and check if user input exists
  if (A.map(item => item.toLowerCase()).includes(userInput)) {
    alert(`${userInput} is available in our bakery.`);
  } else {
    alert(`We are sorry. ${userInput} is not available in our bakery.`);
  }