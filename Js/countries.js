// Using fetch behind array function to get api 
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then(res => res.json())
        .then(data => countries(data));
}

const countries = country => {
    const mapCountry = country.map(c => showAllCountryDetails(c));
    console.log(mapCountry)
    const container = document.getElementById("countries");
    container.innerHTML = mapCountry.join(" ");
}

const showAllCountryDetails = c => {
    return `
    <div class="country">
        <h1>
            ${c.name.common}
        </h1>
        <img src= "${c.flags.png}">
    </div>
   `
}

loadCountries();