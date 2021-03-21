/*
    HW7 - Ex2
*/

// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

function shouldShowSuggestions(shouldShow) {
    if (shouldShow) {
        suggestionsOuput.classList.remove("hidden-block");
    } else {
        suggestionsOuput.classList.add("hidden-block");
    }
}

var countryInput = document.getElementById("country");
countryInput.addEventListener("input", inputEventHandler);

var suggestionsOuput = document.getElementById("suggestions");
shouldShowSuggestions(false);

var suggestionsUL = document.createElement("ul");
suggestionsUL.classList.add("suggestion-ul");
suggestionsOuput.appendChild(suggestionsUL);

function inputEventHandler() {
    
    suggestionsUL.innerHTML = "";
    
    if (countryInput.value.length <= 0) {
        shouldShowSuggestions(false);
        return;
    }
    
    var filteredCountries = countryList.filter(country => country.toLowerCase().startsWith(countryInput.value.toLowerCase()));

    if (filteredCountries.length <= 0) {
        shouldShowSuggestions(false);
        return;
    }
    
    shouldShowSuggestions(true);

    for (var i = 0; i < filteredCountries.length; i++)  {
        var li = document.createElement("li");
        li.classList.add("suggestion-li");
        li.innerHTML = filteredCountries[i];
        li.addEventListener("click", suggestionClickedHandler);

        suggestionsUL.appendChild(li);
    }
}

function suggestionClickedHandler(event) {
    countryInput.value = event.target.innerHTML;
    inputEventHandler();
    shouldShowSuggestions(false);
}
