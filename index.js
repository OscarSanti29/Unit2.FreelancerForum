const names = ["Alice", "Bob", "Carol", "Carlos", "Amy"];

const occupations = ["Writer", "Teacher", "Programmer", "Baker", "Plumber"];

const prices = [20, 30, 40, 50, 60, 70, 80];

const freelancers = [];

const maxlancers = 7;

const maxavearge = 7;

const addrandomlancerIntervalId = setInterval(addrandomlancer, 1000);
const loadaverage = setInterval(averageprice, 1000);

function render() {
    const lancers = document.querySelector("#lancers");
    
    lancers.innerHTML = '';
    
    const lancerElements = freelancers.map((lancer) => {
        const element = document.createElement("li");
        
        element.textContent = `${lancer.name} - ${lancer.occupation} - $${lancer.price}`;
        
        return element;
    });
    lancers.append(...lancerElements);

};


function addrandomlancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    
    const price = prices[Math.floor(Math.random() * prices.length)];
    
    freelancers.push({ name, occupation, price });
    render();
    if (freelancers.length >= maxlancers) {
        clearInterval(addrandomlancerIntervalId);
    }};

function averageprice() {
    const sum = freelancers.reduce((total, currentValue) => total + currentValue.price, 0);
    
    const average = sum / freelancers.length;
    
    console.log("Average price:", average);

    if(freelancers.length >= maxavearge){
        clearInterval(loadaverage);
    }
};

document.addEventListener("DOMContentLoaded", function(){

    const div = document.querySelector("div");

    const p = document.createElement("p");

    p.textContent= `The average is ${averageprice()}`;

    div.append(p);
});
