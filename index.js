const names = ["Alice", "Bob", "Carol","Carlos", "Amy"];

const occupations = ["Writer","teacher","Programmer","Baker","Plumber"];

const prices = [20, 30, 40, 50, 60, 70, 80];

const freelancers = [];

const maxlancers = 7;

const addrandomlancerIntervalId = setInterval(addrandomlancer, 1000);
const loadaverage = setInterval(averageprice, 1000);

function render(){
    const lancers = document.querySelector("#lancers");
    const lancerElements = freelancers.map((lancer)=>{
        const element = document.createElement("li");
        element.classList.add(lancer.name,lancer.occupation,lancer.price);
        return element;
    });
    lancers.replaceChildren(...lancerElements);
};

function addrandomlancer(){
    const name = names[Math.floor(Math.random()*names.length)];

    const occupation = occupations[Math.floor(Math.random()*occupations.length)];

    const price = prices[Math.floor(Math.random()*prices.length)]; 

    freelancers.push({name, occupation, price});

    render();

    if(freelancers.length >= maxlancers){
        clearInterval(addrandomlancerIntervalId);
    }

};

function averageprice(){
    const sum = freelancers.reduce((total, currentvalue) => total + currentvalue.price, 0) / freelancers.length;

    return sum
};