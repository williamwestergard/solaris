
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

// Callback funktion som är kopplad till API:n
fetchData(planetInformation); 


// Callback funktion för objekten
function planetInformation(data) {
    let currentIndex = 0;
    let planetInfo = data.bodies[currentIndex];
    planetsIndex();


    function planetsIndex() {


      
            let smallerTitles = [1, 6, 8];
        
            if (smallerTitles.includes(currentIndex)) {
                planetNames.innerHTML = `<span class="smaller-title">${planetInfo.name}</span>`;
            } else {
                planetNames.innerHTML = planetInfo.name; 
            }  
            
            // Visar planeterna i CSS format om det tillhör rätt index nummer
            //Solen
            if (currentIndex === 0) {
                document.getElementById("sun-planet-css-container").style.display="block";
                document.getElementById("planet-frame-rotation-upper-right").style.width="15.5vw";
            } 
            else {
                document.getElementById("sun-planet-css-container").style.display="none";
                document.getElementById("planet-frame-rotation-upper-right").style.width="10vw";
            }
            //Merkurkius
            if (currentIndex === 1) {
                document.getElementById("merkurius-planet-css-container").style.display="block";
            } 
            else {
                document.getElementById("merkurius-planet-css-container").style.display="none";
            }
            //Venus
              if (currentIndex === 2) {
                document.getElementById("venus-planet-css-container").style.display="block";
            } 
            else {
                document.getElementById("venus-planet-css-container").style.display="none";
            }
            
            



        planetLatinNames.innerHTML = planetInfo.latinName;
        planetCircumference.innerHTML =
        `<span class="strong"> Omkrets: </span>${ planetInfo.circumference}</span>`;
        planetMoons.innerHTML + " " + planetInfo.moons;
        planetOrbitalPeriod.innerHTML =
        `<span class="orbital-number">${planetInfo.orbitalPeriod}</span> <br> 
        <span class="orbital-text-strong"> Omlopps</span><span class="orbital-text-light">period </span>`
    
        let rotationNumbers = planetInfo.rotation;
        planetRotation.innerHTML = 
        ` <span class="rotation-text">Rotation </span> <span class="rotation-numbers-border">${rotationNumbers}</span>`;
    
        let tempDay = planetInfo.temp.day; 
        let tempNight = planetInfo.temp.night; 
        planetTemperature.innerHTML = 
            `<span class="strong temp">Temperatur <br><br> </span>
            <span class="planet-temperature-day"><strong>Dag: </strong>${tempDay}&deg;C</span>
            <span class="planet-temperature-night"><strong>Natt: </strong>${tempNight}&deg;C</span>`;

        planetDesc.innerHTML = planetInfo.desc;
    
        // Ändrar typen om objektets är en stjärna eller planet. 
        // Det ursprungliga värdet var på engelska.
        if (planetInfo.type === "star") {
            let starOrPlanet = document.getElementById("star-or-planet").innerHTML =
        `<span style="font-weight:200;"> Stjärna</span>`;
            planetType + starOrPlanet;
        }
        else {
            let starOrPlanet = document.getElementById("star-or-planet").innerHTML =
            `<span style="font-weight:200;"> Planet</span>`;
            planetType + starOrPlanet;
        }
     }

     function nextButton() {
        currentIndex += 1;
        if  (currentIndex >= data.bodies.length) { 
            currentIndex = 0;
        }
            planetInfo = data.bodies[currentIndex];
            console.log("Changed planetInfo to:", planetInfo);
            planetsIndex();
        }  
    document.getElementById("next-button").addEventListener('click', nextButton);


    function prevButton() {
        if  (currentIndex === 0) { 
            currentIndex = 9;
        }
        currentIndex -= 1;
            planetInfo = data.bodies[currentIndex];
            console.log("Changed planetInfo to:", planetInfo);
            planetsIndex();
        }  
    document.getElementById("prev-button").addEventListener('click', prevButton);

    

        // Sök funktion. Kopplat till listan "#searchbar-list" i HTML filen.
        // När man klickar på ett objekt i listan, 
        // anropas en funktion som ändrar index numret till tillhörande planet.
        function solen() {
                planetInfo = data.bodies[0];
                currentIndex = 0;
                planetsIndex();
            }  
            document.getElementById("solen").addEventListener('click', solen);

        function merkurius() {
                planetInfo = data.bodies[1];
                currentIndex = 1;
                planetsIndex();
            }  
            document.getElementById("merkurius").addEventListener('click', merkurius);

        function venus() {
            planetInfo = data.bodies[2];
            currentIndex = 2;
            planetsIndex();
            }  
            document.getElementById("venus").addEventListener('click', venus);

        function jorden() {
            planetInfo = data.bodies[3];
            currentIndex = 3;
            planetsIndex();
            }  
            document.getElementById("jorden").addEventListener('click', jorden);

        function mars() {
            planetInfo = data.bodies[4];
            currentIndex = 4;
            planetsIndex();
            }  
            document.getElementById("mars").addEventListener('click', mars);

        function jupiter() {
            planetInfo = data.bodies[5];
            currentIndex = 5;
            planetsIndex();
            }  
            document.getElementById("jupiter").addEventListener('click', jupiter);

        function saturnus() {
            planetInfo = data.bodies[6];
            currentIndex = 6;
            planetsIndex();
            }  
            document.getElementById("saturnus").addEventListener('click', saturnus);

        function uranus() {
            planetInfo = data.bodies[7];
            currentIndex = 7;
            planetsIndex();
            }  
            document.getElementById("uranus").addEventListener('click', uranus);

        function neptunus() {
            planetInfo = data.bodies[8];
            currentIndex = 8;
            planetsIndex();
            }  
            document.getElementById("neptunus").addEventListener('click', neptunus);
    

      
    }
    

