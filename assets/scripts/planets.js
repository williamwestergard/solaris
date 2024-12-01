// Callback funktion som är kopplad till API:n
fetchData(planetInformation); 

// Variabler för de tomma elementen i HTML koden
let planetNames = document.getElementById("planet-name");
let planetLatinNames = document.getElementById("planet-latin-name");
let planetCircumference = document.getElementById("planet-circumference");
let planetDesc = document.getElementById("planet-desc");
let planetDistance = document.getElementById("planet-distance");
let planetMoons = document.getElementById("planet-moons");
let planetOrbitalPeriod = document.getElementById("planet-orbital-period");
let planetRotation = document.getElementById("planet-rotation");
let planetTemperature = document.getElementById("planet-temperature");
let planetType = document.getElementById("planet-type");

// Callback funktion för objekten
function planetInformation(data) {
    const planetInfo = data.bodies[0];

    // Information om objekten
    planetNames.innerHTML += " " + planetInfo.name;
    planetLatinNames.innerHTML += planetInfo.latinName;
    planetCircumference.innerHTML += " " + planetInfo.circumference;
    planetMoons.innerHTML += " " + planetInfo.moons;
    planetOrbitalPeriod.innerHTML += " " + planetInfo.orbitalPeriod;
    planetRotation.innerHTML += " " + planetInfo.rotation;
    planetTemperature.innerHTML += " " + "Dag: " + planetInfo.temp.day + ["&deg;C"];
    planetTemperature.innerHTML += " " + "Natt: " + planetInfo.temp.night + ["&deg;C"];
    planetDesc.innerHTML += " " + planetInfo.desc;

    // Ändrar typen om objektets är en stjärna eller planet. 
    // Det ursprungliga värdet var på engelska.
    if (planetInfo.type === "star") {
        let starOrPlanet = document.getElementById("star-or-planet").innerText = "Stjärna"
        planetType.innerHTML += " ";
        planetType + starOrPlanet;
    }
    else {
        let starOrPlanet = document.getElementById("star-or-planet").innerText = "Planet"
        planetType.innerHTML += " ";
        planetType + starOrPlanet;
    }
}

