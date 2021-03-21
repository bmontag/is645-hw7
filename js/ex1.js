/*
    HW7 - Ex1
*/

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};


// First part
var select = document.getElementById("house");

for (var i = 0; i < houses.length; i++) {
    var house = houses[i];
    var option = document.createElement("option");
    option.textContent = house.name;
    option.value = house.code;
    select.appendChild(option);
}

// Second part
var charactersUL = document.getElementById("characters");

select.onchange = function() {

    charactersUL.innerHTML = "";

    var allCharacters = getCharacters(select.value);
    
    for (var i = 0; i < allCharacters.length; i++)  {
        var li = document.createElement("li");
        li.innerHTML = allCharacters[i];

        charactersUL.appendChild(li);
    }
};
