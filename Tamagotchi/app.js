let hunger = 80;
let happiness = 50;
let energy = 40;

function displayInfo(){
    document.getElementById("hungerInfo").innerHTML = `Hunger: ${hunger}`;
    document.getElementById("happinessInfo").innerHTML = `Happiness: ${happiness}`;
    document.getElementById("energyInfo").innerHTML = `Energy: ${energy}`;
}

function feed(){
    console.log("Feed function");
    if(hunger<100 && happiness>0)
    {
        hunger = hunger + 10;
        happiness = happiness - 10;
    }
    displayInfo();
}

function play(){
    console.log("Play function");
    if(happiness<100 && energy>0)
    {
        happiness = happiness + 10;
        energy = energy - 10;
    }
    displayInfo();
}

function pet(){
    console.log("Pet function");
    if(energy<100 && hunger>0)
    {
        energy = energy + 10;
        hunger = hunger - 10;
    }
    displayInfo();
}

displayInfo();